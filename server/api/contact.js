import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    console.log('Contact form submission received')
    const body = await readBody(event)
    console.log('Form data:', body)

    const config = useRuntimeConfig()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        message: 'All fields are required'
      })
    }

    // Get email configuration from runtime config
    const emailConfig = {
      host: config.private.emailHost,
      port: config.private.emailPort,
      user: config.private.emailUser,
      pass: config.private.emailPass,
      to: config.private.emailTo
    }

    // Log email configuration (without sensitive data)
    console.log('Email configuration:', {
      host: emailConfig.host,
      port: emailConfig.port,
      user: emailConfig.user,
      to: emailConfig.to
    })

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: false, // Use STARTTLS
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
        ciphers: 'HIGH:!aNULL:!eNULL:!3DES:!DES:!RC4:!SEED:!IDEA'
      }
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('Email server connection verified')
    } catch (verifyError) {
      console.error('Email server verification failed:', verifyError)
      throw createError({
        statusCode: 500,
        message: 'Fail'
      })
    }

    // Email content
    const mailOptions = {
      from: emailConfig.user,
      to: emailConfig.to,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    console.log('Attempting to send email...')
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return {
      success: true,
      message: 'Message sent successfully'
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to send message'
    })
  }
}) 
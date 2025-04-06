<template>
  <form id="contact" @submit.prevent="handleSubmit" class="max-w-md mx-auto p-6 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a]">
    <h3 class="text-2xl font-display text-[#FFB800] mb-6">Contact Us</h3>
    
    <!-- Honeypot field - hidden from real users but visible to bots -->
    <div class="hidden">
      <label for="website">Website</label>
      <input type="text" id="website" v-model="form.website" />
    </div>

    <div class="mb-4">
      <label for="name" class="block text-gray-300 mb-2">Name</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        class="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-gray-300 focus:border-[#FFB800] focus:outline-none"
        required
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-gray-300 mb-2">Email</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        class="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-gray-300 focus:border-[#FFB800] focus:outline-none"
        required
      />
    </div>

    <div class="mb-4">
      <label for="subject" class="block text-gray-300 mb-2">Subject</label>
      <input
        type="text"
        id="subject"
        v-model="form.subject"
        class="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-gray-300 focus:border-[#FFB800] focus:outline-none"
        required
      />
    </div>

    <div class="mb-6">
      <label for="message" class="block text-gray-300 mb-2">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        class="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-gray-300 focus:border-[#FFB800] focus:outline-none"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting || isRateLimited"
      class="btn-primary w-full disabled:opacity-50"
    >
      {{ isSubmitting ? 'Sending...' : isRateLimited ? 'Please wait...' : 'Send Message' }}
    </button>

    <div v-if="error" class="mt-4 text-red-500 text-sm">
      {{ error }}
    </div>
    <div v-if="success" class="mt-4 text-green-500 text-sm">
      {{ success }}
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '' // Honeypot field
})

const isSubmitting = ref(false)
const error = ref('')
const success = ref('')
const isRateLimited = ref(false)
const lastSubmissionTime = ref(0)
const RATE_LIMIT_DURATION = 30000 // 30 seconds

const handleSubmit = async () => {
  try {
    // Check honeypot field
    if (form.value.website) {
      console.log('Bot detected through honeypot')
      return
    }

    // Check rate limiting
    const now = Date.now()
    if (now - lastSubmissionTime.value < RATE_LIMIT_DURATION) {
      error.value = 'Please wait before submitting another message.'
      isRateLimited.value = true
      return
    }

    console.log('Form submission started')
    isSubmitting.value = true
    error.value = ''
    success.value = ''
    isRateLimited.value = false

    console.log('Sending form data:', form.value)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    console.log('Response status:', response.status)
    const data = await response.json()
    console.log('Response data:', data)

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message')
    }

    success.value = 'Message sent successfully!'
    lastSubmissionTime.value = now
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      website: ''
    }
  } catch (err) {
    console.error('Form submission error:', err)
    error.value = err.message || 'Failed to send message. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}

// Reset rate limiting after the duration
onMounted(() => {
  setInterval(() => {
    const now = Date.now()
    if (now - lastSubmissionTime.value >= RATE_LIMIT_DURATION) {
      isRateLimited.value = false
    }
  }, 1000)
})
</script> 
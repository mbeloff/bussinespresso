<template>
  <section class="section relative">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title display">
        Contact <span class="highlight">Us</span>
      </h2>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Contact Information -->
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-display text-[#FFB800] mb-4">Get in Touch</h3>
            <p class="text-gray-300">
              Whether you're looking to book a corporate function or private party, or just have questions about our menu, we're here to help.
            </p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-display text-[#FFB800]">Email</h4>
              <a href="mailto:info@bussinespresso.com" class="text-gray-300 hover:text-[#FFB800] transition-colors">
                info@bussinespresso.com
              </a>
            </div>
            
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
</script> 
<template>
    <div class="min-h-dvh relative bg-tile flex flex-col items-center justify-center text-white p-8 relative ">
    <!-- Neon border -->
    <div class="absolute inset-4 border-2 border-yellow-500 pointer-events-none"></div>
    <div class="absolute inset-4 border-2 border-yellow-500 blur-[3px] pointer-events-none"></div>
    <div class="absolute inset-4 border-2 border-yellow-500 blur-md pointer-events-none"></div>
    <!-- Hero Section -->
    <div class="text-center font-serif max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 display text-[#e0d1b7] text-balance">Bussin<br><span class="text-2xl md:text-4xl">Food and Events</span></h1>
      <div class="w-32 h-1 bg-amber-300 mx-auto mb-12"></div>
      <p class="text-xl md:text-2xl text-amber-200 max-w-2xl mx-auto mb-8 text-balance">
        Signature Grilled Cheese Sandwiches & Chilled Beverages
      </p>
    </div>

    <!-- Social Media Links -->
    <div class="mt-16 flex gap-8">
      <a 
        href="https://www.facebook.com/bussinfoodandevents" 
        target="_blank"
        class="hover:text-amber-300 transition-colors"
      >
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.1,3.3,9.1,5.47V7.46H5.5v3.4h3.6V22h5.4V10.86h3.47l.44-3.4"/>
        </svg>
      </a>
      <a 
        href="https://www.instagram.com/bussinfoodandevents" 
        target="_blank"
        class="hover:text-amber-300 transition-colors"
      >
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2.2c3.2,0,3.6,0,4.8,0.1c3.3,0.1,4.8,1.7,4.9,4.9c0.1,1.2,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,3.2-1.7,4.8-4.9,4.9c-1.2,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-3.2-0.1-4.8-1.7-4.9-4.9c-0.1-1.2-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8c0.1-3.2,1.7-4.8,4.9-4.9C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-4.4,0.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c4.4-0.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z M18.4,4.2c-0.8,0-1.4,0.6-1.4,1.4S17.6,7,18.4,7c0.8,0,1.4-0.6,1.4-1.4S19.2,4.2,18.4,4.2z"/>
        </svg>
      </a>
    </div>
    <div class="text-center mt-4">
      <a href="mailto:info@bussinfoodandevents.com" class="hover:text-amber-300 transition-colors">info@bussinfoodandevents.com</a>
    </div>

    <!-- Updated glow effect -->
    <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-glow pointer-events-none"></div>
  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>

</style>
<template>
  <div class="min-h-screen">
    <div class="bg-tile">
      <Hero />
    </div>
    <div class="bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <About />
      <Menu />
      <Contact />
    </div>
  </div>
</template>

<style lang="postcss">
.bg-tile {
  background-image: 
    radial-gradient(circle at center, rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.99) 100%),
    url('https://ik.imagekit.io/y3ayiqneqlr/bussin/bussin-tile.webp?tr=w-250');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat,repeat;
  background-size: 100%, 250px
}
.display {
  font-family: 'Tan Buster';
  position: relative;
  color: #e0d1b7;
  text-shadow: 
    -2px -2px 0 black,
    2px -2px 0 black,
    -2px 2px 0 black,
    2px 2px 0 black;
}
.bg-glow {
  background: radial-gradient(
    ellipse at center bottom,
    rgba(253, 166, 17, 0.425) 0%,
    rgba(234, 178, 8, 0.288) 25%,
    rgba(231, 155, 14, 0.13) 50%,
    rgba(245, 159, 11, 0.048) 65%,
    rgba(245, 159, 11, 0) 75%
  );
}

/* New styles */
.section {
  @apply py-20 px-4 md:px-8;
}

.section-title {
  @apply text-4xl md:text-5xl font-display text-center mb-12;
}

.highlight {
  @apply text-[#FFB800];
}

.btn-primary {
  @apply bg-[#FFB800] text-black px-6 py-3 rounded-full font-medium 
         hover:bg-[#FFC833] transition-colors duration-300;
}

.btn-secondary {
  @apply border-2 border-[#FFB800] text-[#FFB800] px-6 py-3 rounded-full 
         hover:bg-[#FFB800] hover:text-black transition-colors duration-300;
}

/* New background effects */
.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 184, 0, 0.2), transparent);
}

.section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 184, 0, 0.2), transparent);
}
</style>

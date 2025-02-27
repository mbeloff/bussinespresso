// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/fonts'],
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Abril Fatface', provider: 'google' },
      // specify specific font data - this will bypass any providers
      { name: 'Tan Buster', src: '/fonts/tan-buster.ttf' },
    ]
  },
  ssr: false,
})
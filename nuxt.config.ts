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

  runtimeConfig: {
    public: {
      // Public variables that will be exposed to the client
    },
    // Private variables that will only be available on the server
    private: {
      emailHost: process.env.EMAIL_HOST,
      emailPort: process.env.EMAIL_PORT,
      emailUser: process.env.EMAIL_USER,
      emailPass: process.env.EMAIL_PASS,
      emailTo: process.env.EMAIL_TO,

    }
  },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
  ],
  tres: {
    glsl: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      Silkscreen: [400, 700],
      Saira: [100, 300, 400, 600, 800],
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})

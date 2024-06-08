// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/seo"],

  site: {
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  robots: {
    enabled: true,
  },

  // sitemap depends on robots so we will just disable it for testing
  sitemap: {
    enabled: false,
  },
})

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },
  modules: [
    '@nuxt/test-utils/module'
  ]
})
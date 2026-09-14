// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/mcp-toolkit',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
    'nuxt-studio',
  ],
  studio: {
    repository: {
      provider: 'github',
      owner: 'turkmenus',
      repo: 'new-blog',
      branch: 'main'
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})  
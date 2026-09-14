
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    // '@nuxtjs/mcp-toolkit' is disabled for Cloudflare Workers builds
    // because its Cloudflare provider imports "agents/mcp", which cannot
    // be resolved in the Workers runtime. Re-enable only if you add MCP
    // tools/resources and switch to a compatible target (e.g. Cloudflare Pages).
    '@nuxtjs/seo',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
    'nuxt-studio',
  ],
  studio: {
    repository: {
      provider: 'github',
      owner: 'turkmenus',
      repo: 'base-studio',
      branch: 'master'
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  nitro: {
    preset: 'cloudflare-module',
    experimental: {
      wasm: true,
    },
  },
})  
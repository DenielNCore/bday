// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  // Disable SSR - SPA mode
  ssr: false,
  modules:['@vueuse/nuxt'],
  app: {
    baseURL: '/',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  
  // TypeScript configuration
  // typescript: {
  //   strict: true,
  //   typeCheck: true
  // },
  
  // CSS configuration
  css: ['~/assets/css/main.css'],
  
  // PostCSS configuration for Tailwind
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      DB_URL: process.env.DB_URL,
    },
  },
})


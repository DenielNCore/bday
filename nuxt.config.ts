// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Disable SSR - SPA mode
  ssr: false,
  
  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true
  },
  
  // CSS configuration
  css: ['~/assets/css/main.css'],
  
  // PostCSS configuration for Tailwind
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})


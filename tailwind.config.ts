import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'hand-drawn': ['Kalam', 'Caveat', 'cursive'],
      },
      colors: {
        'crayon-brown': '#8b4513',
        'crayon-yellow': '#fff9e6',
      },
    },
  },
  plugins: [],
} satisfies Config


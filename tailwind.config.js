/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ], theme: {
    extend: {
      objectPosition: {
        'center-bottom': '50% 100%',
      },
      animation: {
        fullSpin: 'fullSpin2 3s linear infinite',
        fullBorder:'backGround 6s ease infinite'
      },
      keyframes: {
        fullSpin2: {
          '100%': {
            transform: 'rotate(-360deg)'
          }
        },
        backGround: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
    },
  },
  plugins: [],
}
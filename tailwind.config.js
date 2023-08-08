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
      keyframes:{
        fullSpin:{
          '100%':{
            transform:'rotate(-360deg)'
          }
        }
      },
      animation:{
        fullSpin:'fullSpin 3s linear infinite'
      }
    },
  },
  plugins: [],
}
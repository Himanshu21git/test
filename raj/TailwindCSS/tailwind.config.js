/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl' : '30px 30px 6px #899',
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
  darkMode: 'class'
}


const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: colors.slate,
        primary: colors.purple,
        secondary: colors.orange,
        tertiary: colors.emerald
      }
    },
  },
  plugins: [],
}

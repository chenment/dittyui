const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./packages/ditty/src/**/*.{ts,js,tsx,jsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        0: '0',
      },
      fontSize: {
        0: '0',
      },
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

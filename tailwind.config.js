/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './formkit.config.js',
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      transitionProperty: {
        spacing: 'margin, padding',
      },
      screens: {
        print: { raw: 'print' },
      },
      fontFamily: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        display:
          'Tan Buster, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
        serif: 'Abril Fatface, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        blue: colors.sky,
        green: colors.emerald,
        accent: colors.rose,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
      },
    },
    variants: {
      extend: {
        scale: ['active', 'group-hover'],
        translate: ['group-hover'],
        borderRadius: ['first', 'last'],
        padding: ['hover'],
      },
    },
  },
}

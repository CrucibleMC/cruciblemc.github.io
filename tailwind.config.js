/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'base-gray': '#263238',
      'gray': '#37474F',
      'light-gray': '#546E7A',
      'bright-gray': '#E6E6E6',
      'green': '#76FF03',
      'light-green': '#98FB35',
      'bright-green': '#CCFF99',
      'white': '#FFFFFF',
    },
    fontFamily: {
      logo: ['Bebas Neue', 'cursive'],
      functional: ['Roboto', 'sans-serif'],
      display: ['Titan One', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

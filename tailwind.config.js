/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#937DC2',
        secondary: '#B1B2FF',
        tertiary: '#AAC4FF',
        accent: '#0000FF',
        border: '#B2B2B2',
        text: {
          red: '#FF0000',
          blue: '#0000FF',
          black: '#000000',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryBg': '#E3E6E6',
        'secondaryBg': '#131921',
        'button': '#F7CA00',
        'border': '#FB7C0D',
        'pirmaryText' : '#000000',
        'secondaryText' : '#ccc'
      },
      fontFamily:{
        'roboto': "Roboto, sans-serif"
      }
    },
  },
  plugins: [],
}


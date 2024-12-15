/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryBg': '#F1F2F4',
        'secondaryBg': '#131921',
        'button': '#F7CA00',
        'border': '#FB7C0D',
        'pirmaryText' : '#000000',
        'secondaryText' : '#ccc',
        'rating' : "#388E3C"
      },
      fontFamily:{
        'roboto': "Roboto, sans-serif"
      },
      boxShadow:{
        'custom' : "0px 5px 15px rgba(0, 0, 0, 0.35)",
      }
    },
  },
  plugins: [],
}


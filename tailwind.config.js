/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "#F5F5F5",
        secondaryBgColor: "#011F2D",
        primaryButtonColor: "#0062EE",
        green: "#008060",
        red: "#DC1D1D",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


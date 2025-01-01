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
        green: "#008A00",
        red: "#DC1D1D",
        grayColor: "#6b7280"
      },
      boxShadow:{
        custom: 'rgba(100, 100, 111, 0.2) 0px 0px 29px 0px;'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}


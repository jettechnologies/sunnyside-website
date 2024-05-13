/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "soft-red": "hsl(7, 99%, 70%)",
      yellow: "hsl(51, 100%, 49%)",
      text:{
        cyan: "hsl(167, 40%, 24%)",
        blue: "hsl(198, 62%, 26%)",
        "blue-400": "hsl(212, 27%, 19%)",
        "blue-300": "hsl(213, 9%, 39%)",
        "blue-200": "hsl(232, 10%, 55%)",
        "blue-100": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
      cyan: "hsl(168, 34%, 41%)",
      "hero-section": "#3dbeff",
      about: {
        "first-section": "#fed2d",
        "second-section": "#fe7f6e",
      },
      services:{
        "first-section": "#8ecec4",
        "second-section": "#5fcbff"
      },
      black: "#000", 
    },
    fontFamily:{
      "fraunces": ["Fraunces", "serif"],
      "barlow": ["Barlow", "sans-serif"],
    },
    fontSize: {
      "size-400": ["14px", "1.4em"],
      "size-500": ["16px", "1.4em"],
      "size-600": ["22px", "1.4em"],
      "size-700": ["2.5rem", "1.4em"],
      "size-800": ["3.5rem", "1.6em"],
    },
    extend: {
      backgroundImage:{
        "graphic": "url('../src/assets/graphic-img.png')",
        "photography": "url('../src/assets/photography-img.png')",
      }
    },
  },
  plugins: [],
}


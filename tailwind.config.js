/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#1D284D",
        secondary: "#8e44ad",
        aColor: "#e67e22",
        bgColor: "#f5f5f5",
        tColor: "#34495e"
      }
    },
  },
  plugins: [],
}


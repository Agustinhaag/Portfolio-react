/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  "darkMode": "class",
  theme: {
    extend: {
      colors:{
        customGray: '#363636',
        customPink:'#f072e9',
        customBlack: '#161616',
        customHeader: '#000000e8',
        customHeaderTransp: '#3b3b3b9c'
      }
    },
  },
  plugins: [],
}


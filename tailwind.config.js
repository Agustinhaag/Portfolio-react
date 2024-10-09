/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGray: "#363636",
        customPink: "#f072e9",
        customBlack: "#161616",
        customHeader: "#000000e8",
        customHeaderTransp: "#3b3b3b9c",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        custom: "430px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FB7413",
        "light-grey": "#959EAC",
        "dark-blue": "#252D37",
        "very-dark-blue": "#121417",
      },
      fontSize: {
        "15px" : "15px"
      }
    },
  },
  plugins: [],
}
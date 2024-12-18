/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#21429B",
        primaryDeep: "#3658A8",
        secondary: "#4BB7E8",
        light : "#ECEFFE"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto : [ 'Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
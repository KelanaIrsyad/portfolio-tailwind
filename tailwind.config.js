/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#5ee0bb",
      },
      boxShadow: {
        'all': '0 0 25px rgba(94, 224, 187, 1)',
        '2all': '0 0 50px rgba(94, 224, 187, 1)',
      }
    },
  },
  plugins: [],
}
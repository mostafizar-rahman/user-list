/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#2479df"
      },
      boxShadow:{
        "main":"0px 0px 15px 1px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
}


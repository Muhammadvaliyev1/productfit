/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      colors: {
        brend: {
          'cyan': '#1E959B',
          'red': '#F05670',
          'darkgray': '#3C3C3C'
        }
      },
      screens: {
        'base': '850px',
        's': '430px'
      }
    },
  },
  plugins: [],
}


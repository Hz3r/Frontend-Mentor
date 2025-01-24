/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        DarkCyan : 'hsl(185, 75%, 39%)',
        desaturated : 'hsl(229, 23%, 23%)',
        grayish : 'hsl(227, 10%, 46%)',
        gray : 'hsl(0, 0%, 59%)',
      },
      fontFamily:{
        kumbh:['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


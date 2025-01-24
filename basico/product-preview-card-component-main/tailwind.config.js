/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        cyan : 'hsl(158, 36%, 37%)',
        cream : 'hsl(30, 38%, 92%)',
        darkBlue : 'hsl(212, 21%, 14%)',
        grayistBlue : 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      fontWeight: {
        'montserrat-500': 500,
        'montserrat-700': 700,
        'fraunces-700': 700,
      },
    },
  },
  plugins: [],
}


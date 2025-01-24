/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        //PRIMARY
        SoftBlue : 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        //NEUTRAL
        main:'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)'
      },
      fontFamily:{
        outfit:['"Outfit"','sans-serif']
      }
    },
  },
  plugins: [],
}


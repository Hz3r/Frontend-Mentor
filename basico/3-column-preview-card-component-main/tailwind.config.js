/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        orange: 'hsl(31, 77%, 52%)',
        cyan: 'hsl(184, 100%, 22%)',
        darkCyan: 'hsl(179, 100%, 13%)',
        tranparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        lightGray: 'hsl(0, 0%, 95%)'
      },
      fontFamily:{
        lexend: ['"Lexend Deca"', 'sans-serif'],
        bigShoulders: ['"Big Shoulders Display"', 'cursive'],
      }
    },
  },
  plugins: [],
}


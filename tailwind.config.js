/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Montserrat"', 'sans-serif'],
        'mulish':['Mulish']
      },
      colors:{
        'discord': '#7289da',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["garden", "forest"],
  },
}

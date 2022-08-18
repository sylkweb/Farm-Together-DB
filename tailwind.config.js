/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        'discord': '#7289da',
      },
      fontFamily:{
        'sans': ['"Montserrat"', 'sans-serif'],
        'mulish':['Mulish']
      },
      width:{
        '124': '32rem',
        '160': '40rem',
      },
      keyframes:{
        'up-down': {
          '0%, 100%': {
              transform: 'translateY(0px)'
          },
          '50%': {
              transform: 'translateY(10px)'
          },
        },
      },
      animation:{
        'slide': 'up-down 2s ease-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["garden", "forest"],
  },
}

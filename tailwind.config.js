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
        '192': '48rem',
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
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('@tailwindcss/line-clamp'),],
  daisyui: {
    themes: ["garden", "forest"],
  },
}

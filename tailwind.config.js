/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'yell':'#FFF3C7',
      'peach':'#FEC7B4',
      'pinky':'#FC819E',
      'pinky1':'#F7418F'
    },
    extend: {},
  },
  plugins: [],
}
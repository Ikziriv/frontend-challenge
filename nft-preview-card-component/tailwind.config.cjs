/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      extend: {
          fontFamily: {
              'outfit': ['Outfit'],
              'outfit-bold': ['OutfitBold'],
              'outfit-black': ['OutfitBlack'],
          },
          colors: {
              'soft-blue': 'hsl(215, 51%, 70%)',
              'cyan': 'hsl(178, 100%, 50%)',
              'bgm-dark-blue': 'hsl(217, 54%, 11%)',
              'bgc-dark-blue': 'hsl(216, 50%, 16%)',
              'bgl-dark-blue': 'hsl(215, 32%, 27%)',
              'white': 'hsl(0, 0%, 100%)',
          },
      }
  },
  plugins: []
};
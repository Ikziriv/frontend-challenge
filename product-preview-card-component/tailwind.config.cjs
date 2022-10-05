/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
          'fraunces': ['Fraunces'],
          'fraunces-bold': ['FrauncesBold'],
          'fraunces-black': ['FrauncesBlack'],
          'montserrat': ['Montserrat'],
          'montserrat-bold': ['MontserratBold'],
          'montserrat-black': ['MontserratBlack'],
      },
      colors: {
          'dark-cyan': 'hsl(158, 36%, 37%)',
          'bg-dark-cyan': 'hsl(158, 36%, 37%)',
          'cream': 'hsl(30, 38%, 92%)',
          'bg-cream': 'hsl(30, 38%, 92%)',
          'dark-blue': 'hsl(212, 21%, 14%)',
          'bg-dark-blue': 'hsl(212, 21%, 14%)',
          'grayish-blue': 'hsl(228, 12%, 48%)',
          'bg-grayish-blue': 'hsl(228, 12%, 48%)',
          'white': 'hsl(0, 0%, 100%)',
      },
    }
  },
  plugins: []
};
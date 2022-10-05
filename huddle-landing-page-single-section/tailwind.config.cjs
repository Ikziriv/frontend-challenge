/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      fontFamily: {
          'poppins': ['Poppins'],
          'poppins-medium': ['PoppinsMedium'],
          'poppins-bold': ['PoppinsBold'],
          'poppins-black': ['PoppinsBlack'],
          'open-sans': ['OpenSans'],
          'open-medium': ['OpenSansMedium'],
      },
      extend: {
          colors: {
              'violet': 'hsl(257, 40%, 49%)',
              'bg-violet': 'hsl(257, 40%, 49%)',
              'soft-magenta': 'hsl(300, 69%, 71%)',
              'bg-soft-magenta': 'hsl(300, 69%, 71%)',
          },
      }
  },
  plugins: []
};
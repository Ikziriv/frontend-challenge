/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            'poppins': ['Poppins'],
            'poppins-medium': ['PoppinsMedium'],
            'poppins-black': ['PoppinsBlack'],
            'open-sans': ['OpenSans'],
        },
        extend: {
            colors: {
                'pink': 'hsl(322, 100%, 66%)',
                'bg-pink': 'hsl(322, 100%, 66%)',
                'light-pink': 'hsl(321, 100%, 78%)',
                'light-red': 'hsl(0, 100%, 63%)',
                'dark-cyan': 'hsl(192, 100%, 9%)',
                'bg-dark-cyan': 'hsl(192, 100%, 9%)',
                'pale-blue': 'hsl(207, 100%, 98%)',
                'bg-pale-blue': 'hsl(207, 100%, 98%)',
            },
        }
    },
    plugins: []
};
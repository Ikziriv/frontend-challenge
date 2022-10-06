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
                'white': 'hsl(0, 0%, 100%)',
                'light-gray': 'hsl(212, 45%, 89%)',
                'bg-light-gray': 'hsl(212, 45%, 89%)',
                'grayish-blue': 'hsl(220, 15%, 55%)',
                'bg-grayish-blue': 'hsl(220, 15%, 55%)',
                'dark-blue': 'hsl(218, 44%, 22%)',
            },
        }
    },
    plugins: []
};
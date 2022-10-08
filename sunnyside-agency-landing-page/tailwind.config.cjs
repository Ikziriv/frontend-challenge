/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'barlow': ['Barlow'],
                'barlow-semibold': ['BarlowSemiBold'],
                'barlow-bold': ['BarlowBold'],
                'barlow-black': ['BarlowBlack'],
                'fraunces': ['Fraunces'],
                'fraunces-semibold': ['FrauncesSemiBold'],
                'fraunces-bold': ['FrauncesBold'],
                'fraunces-black': ['FrauncesBlack'],
            },
            colors: {
                'soft-red': 'hsl(7, 99%, 70%)',
                'yellow': 'hsl(51, 100%, 49%)',
                'dark-desa-cyan': 'hsl(167, 40%, 24%)',
                'dark-blue': 'hsl(198, 62%, 26%)',
                'dark-mod-cyan': 'hsl(168, 34%, 41%)',
                'dark-desa-blue': 'hsl(212, 27%, 19%)',
                'dark-grayish-blue': 'hsl(213, 9%, 39%)',
                'grayish-blue': 'hsl(210, 4%, 67%)',
                'white': 'hsl(0, 0%, 100%)',
            },
        }
    },
    plugins: []
};
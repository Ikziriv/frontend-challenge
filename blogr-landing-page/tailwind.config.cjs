/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
      theme: {
        extend: {
            fontFamily: {
                'overpass': ['Overpass'],
                'overpass-semibold': ['OverpassSemiBold'],
                'overpass-bold': ['OverpassBold'],
                'overpass-black': ['OverpassBlack'],
                'ubuntu': ['Ubuntu'],
                'ubuntu-semibold': ['UbuntuSemiBold'],
                'ubuntu-bold': ['UbuntuBold'],
                'ubuntu-black': ['UbuntuBlack'],
            },
            colors: {
                'light-red': 'hsl(356, 100%, 66%)',
                'very-light-red': 'hsl(355, 100%, 74%)',
                'very-dark-blue': 'hsl(208, 49%, 24%)',
                'white': 'hsl(0, 0%, 100%)',
                'grayish-blue': 'hsl(240, 2%, 79%)',
                'vd-grayish-blue': 'hsl(207, 13%, 34%)',
                'vd-black-blue': 'hsl(240, 10%, 16%)',
                'grd-very-light-red': 'hsl(13, 100%, 72%)',
                'grd-light-red': 'hsl(353, 100%, 62%)',
                'grd-vd-gray-blue': 'hsl(237, 17%, 21%)',
                'grd-vd-desaturated-blue': 'hsl(237, 23%, 32%)',
            },
        },
      },
      plugins: [],
}

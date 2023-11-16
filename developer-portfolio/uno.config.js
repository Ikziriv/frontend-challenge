// uno.config.ts
import { 
    defineConfig,
    presetUno,
    presetIcons,
    presetAttributify,
    presetTypography,
    presetWebFonts,
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import presetTagify from '@unocss/preset-tagify';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { presetForms } from '@julr/unocss-preset-forms';

export default defineConfig({
    extractors: [
        extractorSvelte(),
    ],
    theme: {
        breakpoints: {
          sm: '320px',
          md: '640px',
          lg: '960px',
        },
    },
    shortcuts: {
        // Shortcuts to multiple utilities
        'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    },
    presets: [
        presetUno({
            dark: 'media'
        }),
        presetForms(),
        presetIcons({
            prefix: 'i-',
            extraProperties: {
              'display': 'inline-block',
              'vertical-align': 'middle',
            },
            cdn: 'https://esm.sh/'
        }),
        presetAttributify({ 
            prefix: 'ikz-', 
        }),
        presetTypography(),
        presetTagify(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            roboto: 'Roboto',
            nunito: 'Nunito Sans',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            lobster: 'Lobster',
          },
        }),
    ],
    transformers: [
        transformerVariantGroup(),
    ],
})
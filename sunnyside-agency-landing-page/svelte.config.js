import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
    kit: {
        adapter: adapter(),
        alias: {
            $components: './src/lib/components',
            $general: './src/lib/components/general',
            $section: './src/lib/components/section',
            $shared: './src/lib/components/shared',
            $helper: './src/lib/helper',
        }
    }
};

export default config;
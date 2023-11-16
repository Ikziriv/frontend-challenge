import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
	plugins: [
		UnoCSS({
			onlyGlobal: true,
			injectReset: '@unocss/reset/tailwind.css',
		  }),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

<script lang="ts">
    import { page } from "$app/stores";
    import Icon from '@iconify/svelte';

	export let path: string;
	export let color: string;
	export let classes: string;

	$: active = $page.url.pathname === `/${path}/`;
</script>

<a href={path} class:active class="{path} flex flex-row justify-center items-center {classes} md:space-x-2 hover:scale-[100%] transition ease-in-out duration-300">
    <span class="font-ubuuntu-bold text-{color}"><slot /></span>
    <span class="hidden md:flex w-auto h-auto">
        <Icon class="w-2 h-2 text-{color}" icon="bi:caret-down-fill" />
    </span>
</a>

<style lang="postcss">
	/* a * {
		text-transform: capitalize;
	} */

	/* a {
		z-index: 1;
		color: inherit;
		transition: filter var(--link-transition-time);
	}

	a {
		text-shadow: 0.03em 0.03em rgba(var(--text-shadow), 50%);
		color: rgb(var(--text-color));
		transition: background-color 200ms ease-out, box-shadow 100ms ease-out;
	}

	.active {
		background-color: rgb(var(--secondary-color));
		color: rgb(var(--background-base));
	} */
</style>
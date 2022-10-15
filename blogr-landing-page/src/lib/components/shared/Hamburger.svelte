<script lang="ts">
	import { isMobileOpen } from '$lib/stores';
    import Icon from '@iconify/svelte';
</script>

<button class="block md:hidden p-0 cursor-pointer border-none focus:outline-none" on:click={() => ($isMobileOpen = !$isMobileOpen)}>
	<Icon class="w-8 h-8 text-white hover:text-zinc-400" icon="ion:menu-outline" />
</button>

<style>
</style>
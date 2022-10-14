<script>
    import Icon from '@iconify/svelte';
	export let open = false
</script>

<button class="block md:hidden p-0 cursor-pointer border-none focus:outline-none" class:open on:click={() => open = !open}>
	<Icon class="w-8 h-8 text-white hover:text-zinc-400" icon="ion:menu-outline" />
</button>

<style>
</style>
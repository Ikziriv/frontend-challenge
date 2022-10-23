<script lang="ts">
    import { onMount } from 'svelte';
	import { pages, isMobileOpen } from '../stores';
	import { fly, fade, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

    let mobileWidth: MediaQueryList;
    let prefersReducedMotion: boolean = false;
    
	onMount(() => {
		mobileWidth = window.matchMedia('(max-width:810px)');
		prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion)'
		).matches;
	});
    
	let navTransition = prefersReducedMotion ? fade : fly;

    import "../app.css";
</script>

<div class="w-full h-auto relative">
    <main class="flex justify-center items-center w-full h-auto p-4 md:p-16">
        <slot />
    </main>

    {#if mobileWidth?.matches && $isMobileOpen}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div 
            class="z-[100] fixed inset-y-0 right-0 flex flex-col justify-center items-end w-full h-screen"
            on:click={() => ($isMobileOpen = false)}
            transition:slide
        >
            <div class="flex flex-col justify-start items-start w-64 h-screen bg-white shadow-lg py-0 relative">
                <div class="absolute right-0 top-0 w-auto h-auto p-4 pt-12 md:pt-0">
                    <div 
                        class="flex justify-center items-center w-auto h-auto p-2 rounded bg-white hover:bg-zinc-100"
                        transition:navTransition={{ easing: cubicOut, x: 200, duration: 300 }}
                        on:click={() => ($isMobileOpen = false)}
                    >
                        <img 
                            transition:navTransition={{ easing: cubicOut, y: -200, duration: 300 }}
                            class="w-8 h-auto" src="/assets/img/icon-menu-close.svg" 
                            alt="Menu Close"
                        >
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start w-auto h-auto space-y-4 p-8 pt-40"
                    transition:navTransition={{ easing: cubicOut, y: 200, duration: 300 }}>
                    {#each pages as { name, path }}
                        <a href={path} class="text-lg font-semibold font-inter-regular text-very-dark-blue hover:text-soft-red">{name}</a>
                    {/each}
                </div>
                <!-- Footer Mobile Navigation -->
                <div class="absolute inset-x-0 bottom-0 w-full h-auto">
                    <div class="flex flex-col justify-end items-end w-auto h-auto">
                        <div 
                            class="flex justify-center items-center text-center bg-black p-2"
                            transition:navTransition={{ easing: cubicOut, y: 200, duration: 300 }}
                        >
                            <a rel="noreferrer" class="text-xs uppercase tracking-widest text-white" href="https://ikziriv.com" target="_blank">
                                Ikziriv Design & Development
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    {/if}
</div>

{#if mobileWidth?.matches && $isMobileOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div 
        class="z-50 overlay bg-gradient-to-r from-zinc-900/50 to-gray-900/50" 
        on:click={() => ($isMobileOpen = false)}
        transition:fade
    />
{/if}

<style lang="css">
	@media screen and (max-width: 810px) {
        .overlay {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.2); */
        }
	}
</style>
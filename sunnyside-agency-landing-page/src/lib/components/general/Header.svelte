<script lang="ts">
    import { onMount } from 'svelte';
	import { isMobileOpen } from '$lib/stores';
	import { fly, fade, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Hamburger from '$shared/Hamburger.svelte'
    import Icon from '@iconify/svelte';

    /**
	 * @type {string}
	 */
    export let role: string;
	export let sidebar: boolean = false

    export let mobileWidth: MediaQueryList;
    export let prefersReducedMotion: boolean;
    
	let previousY = 0;
	let currentY = 0;
	let clientHeight = 0;

	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		previousY = y;
		return direction;
	};

	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;

    onMount(() => {
        mobileWidth = window.matchMedia('(max-width:810px)');
        prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion)'
        ).matches;
    });

	let navTransition = prefersReducedMotion ? fade : fly;
</script>

<svelte:window bind:scrollY={currentY} />

<header 
    role={role} 
    class="flex justify-between items-start md:items-center w-full h-auto fixed z-40 px-6 md:px-8 py-8 md:py-6 {currentY >= clientHeight ? 'bg-[#3ebfff]' : ''}"
    class:motion-safe:-translate-y-full={offscreen}
    bind:clientHeight
>
    <a href="/" class="w-auto h-auto">
        <img src="/assets/img/logo.svg" alt="Logo">
    </a>
    <div class="hidden md:flex flex-row space-x-4 justify-end items-center w-auto h-auto">
        <a href="/" class="text-white font-normal font-borlow">About</a>
        <a href="/" class="text-white font-normal font-borlow">Services</a>
        <a href="/" class="text-white font-normal font-borlow">Projects</a>
        <a href="/" class="flex justify-center items-center text-dark-grayish-blue hover:text-white bg-white hover:bg-white/25 w-32 h-12 rounded-full">
            <span class="font-bold uppercase font-fraunces-bold">Contact</span>
        </a>
    </div>
    <Hamburger />
</header>

{#if mobileWidth?.matches && $isMobileOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
        class="z-[100] fixed inset-0 flex flex-col justify-center items-center w-full h-screen"
        on:click={() => ($isMobileOpen = false)}
        transition:fade
    >
        <div class="flex flex-col justify-center items-center w-80 h-[33rem] bg-zinc-900/75 shadow-lg py-16 relative">
            <div class="flex justify-center items-center w-full h-auto mb-16 px-10">
                <img 
                    transition:navTransition={{ easing: cubicOut, y: -200, duration: 300 }}
                    class="w-40 h-auto" src="/assets/img/logo.svg" 
                    alt="Sunnyside Logo"
                >
            </div>
            <div class="flex flex-col justify-center items-center space-y-4"
                transition:navTransition={{ easing: cubicOut, y: 200, duration: 300 }}>
                <div class="flex flex-col justify-end items-center w-auto h-auto">
                    <a href="/" class="mb-4">
                        <span class="title-stroke flex text-center font-bold text-xl text-white">
                            Menu
                        </span>
                    </a>
                    <a href="/" class="text-white font-normal font-borlow mb-2">About</a>
                    <a href="/" class="text-white font-normal font-borlow mb-2">Services</a>
                    <a href="/" class="text-white font-normal font-borlow mb-16">Projects</a>
                    <a href="/" class="flex justify-center items-center text-dark-grayish-blue hover:text-white bg-white hover:bg-white/25 w-32 h-8 rounded-full">
                        <span class="font-bold uppercase font-fraunces-bold">Contact</span>
                    </a>
                </div>
            </div>
            <!-- Footer Mobile Navigation -->
            <div class="absolute left-0 top-0 w-auto h-auto p-4">
                <div 
                    class="flex justify-center items-center w-auto h-auto p-2 rounded bg-white hover:bg-zinc-100 shadow"
                    transition:navTransition={{ easing: cubicOut, x: -200, duration: 300 }}
                    on:click={() => ($isMobileOpen = false)}
                >
                    <Icon class="w-4 h-4 text-zinc-900 hover:text-zinc-400" icon="ion:close-outline" />
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-end items-end w-auto h-auto pt-16">
            <div 
                class="flex justify-center items-center text-center bg-zinc-900/50 p-2 rounded"
                transition:navTransition={{ easing: cubicOut, y: 200, duration: 300 }}
            >
                <a rel="noreferrer" class="text-xs uppercase tracking-widest text-white" href="https://ikziriv.com" target="_blank">
                    Ikziriv Design & Development
                </a>
            </div>
        </div>
    </div>
{/if}

{#if mobileWidth?.matches && $isMobileOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div 
        class="z-50 overlay bg-gradient-to-r from-grd-light-red/50 to-grd-very-light-red/50" 
        on:click={() => ($isMobileOpen = false)}
        transition:fade
    />
{/if}

<style lang="css">
	@media screen and (max-width: 810px) {
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.2); */
        }
	}
</style>
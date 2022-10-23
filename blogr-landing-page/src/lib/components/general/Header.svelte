<script lang="ts">
    import { onMount } from 'svelte';
	import { isMobileOpen } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
    import Icon from '@iconify/svelte';

    import Hamburger from "../shared/Hamburger.svelte";
	import NavItem from './NavItem.svelte';

	export let mobileWidth: MediaQueryList;
	export let prefersReducedMotion: boolean;

	let x: number;
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

	const pages = [
		{ name: 'Product', path: '/' },
		{ name: 'Company', path: '/' },
		{ name: 'Contact', path: '/' },
	];
</script>

<svelte:window bind:scrollY={currentY} />

<div
    class="z-40 fixed flex flex-row justify-between items-center w-full h-auto py-12 md:py-12 px-6 md:px-32 transition-transform ease-in 
    {currentY >= clientHeight ? 'bg-gradient-to-r from-grd-very-light-red to-grd-light-red rounded-bl-[100px] shadow-xl' : ''}"
    class:motion-safe:-translate-y-full={offscreen}
    bind:clientHeight
>
    <div class="flex flex-row justify-center items-center">
        <div class="w-auto h-auto mr-0 md:mr-20">
            <img class="w-20 h-auto" src="/assets/img/logo.svg" alt="Blogr Logo">
        </div>
        <div class="hidden md:flex flex-row md:space-x-6 relative"
            transition:navTransition={{ easing: cubicOut, x: 200, duration: 300 }}>
            {#each pages as { name, path }}
                <NavItem {path} color="white" classes="w-auto h-auto">{name}</NavItem>
            {/each}
        </div>
    </div>

    <div class="hidden md:flex flex-row justify-center items-center space-x-4">
        <a href="/" class="w-auto h-auto">
            <span class="text-white font-ubuntu-bold font-medium text-md">Login</span>
        </a>
        <a href="/" class="flex justify-center items-center py-2 px-8 rounded-full bg-white hover:bg-white/50 text-grd-light-red hover:text-white">
            <span class="font-ubuntu-bold font-medium text-md">Sign Up</span>
        </a>
    </div>

    <Hamburger />
</div>


{#if mobileWidth?.matches && $isMobileOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
        class="z-[100] fixed inset-0 flex flex-col justify-center items-center w-full h-screen"
        on:click={() => ($isMobileOpen = false)}
        transition:fade
    >
        <div class="flex flex-col justify-start items-center w-80 h-[33rem] bg-zinc-900/75 shadow-lg py-16 relative">
            <div class="flex justify-between items-center w-full h-auto mb-8 px-10">
                <img 
                    transition:navTransition={{ easing: cubicOut, y: -200, duration: 300 }}
                    class="w-16 h-auto" src="/assets/img/logo.svg" 
                    alt="Blogr Logo"
                >
                <span class="title-stroke flex text-center font-bold text-xl text-white"
                transition:navTransition={{ easing: cubicOut, y: -200, duration: 300 }}>Menu</span>
            </div>
            <div class="flex flex-col justify-center items-center space-y-4"
                transition:navTransition={{ easing: cubicOut, y: 200, duration: 300 }}>
                {#each pages as { name, path }}
                    <NavItem {path} color="white" classes="w-64 h-12 rounded shadow px-2 py-2 bg-gradient-to-r from-grd-very-light-red to-grd-light-red">{name}</NavItem>
                {/each}
            </div>
            <!-- Footer Mobile Navigation -->
            <div class="absolute right-0 bottom-0 w-auto h-auto p-4">
                <div 
                    class="flex justify-center items-center w-auto h-auto p-2 rounded bg-white hover:bg-zinc-100 shadow"
                    transition:navTransition={{ easing: cubicOut, x: 200, duration: 300 }}
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
    .title-stroke {
        /* Prefix required. Even Firefox only supports the -webkit- prefix */
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: hsl(353 100% 62% / 0.5);
    }
    
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
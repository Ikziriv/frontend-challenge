<script lang="ts">
	import { isMobileOpen } from '$lib/stores';
    import Header from "../lib/components/general/Header.svelte"
    import Footer from "../lib/components/general/Footer.svelte"
    import "../app.css";

    let mobileWidth: MediaQueryList;
    let prefersReducedMotion: boolean = false;
    let x: number;
</script>
  
<Header {mobileWidth} {prefersReducedMotion} />
<main class="font-open-sans">
    <slot />
</main>
<Footer />
<script>
    import Header from "../lib/components/general/Header.svelte"
    import Footer from "../lib/components/general/Footer.svelte"
    import "../app.css";
</script>
  
<Header />
<main class="font-open-sans">
    <slot />
</main>
<Footer />
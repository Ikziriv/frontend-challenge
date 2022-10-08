<script>
    import Header from '$general/Header.svelte'
    import Footer from '$general/Footer.svelte'
    import "../app.css";
</script>

<Header role="header" />
<!-- svelte-ignore a11y-unknown-role -->
<main role="section-main">
    <slot />
</main>
<Footer role="footer" />
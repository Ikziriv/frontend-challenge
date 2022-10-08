<script>
    /**
	 * @type {string}
	 */
    export let role;
</script>
<header role={role} class="flex justify-between items-center w-full h-auto fixed z-40 px-8 py-6">
    <a href="/" class="w-auto h-auto">
        <img src="/assets/img/logo.svg" alt="Logo">
    </a>
    <div class="flex flex-row space-x-4 justify-end items-center w-auto h-auto">
        <a href="/" class="text-white font-normal font-borlow">About</a>
        <a href="/" class="text-white font-normal font-borlow">Services</a>
        <a href="/" class="text-white font-normal font-borlow">Projects</a>
        <a href="/" class="flex justify-center items-center text-dark-grayish-blue hover:text-white bg-white hover:bg-white/25 w-32 h-12 rounded-full">
            <span class="font-bold uppercase font-fraunces-bold">Contact</span>
        </a>
    </div>
</header>
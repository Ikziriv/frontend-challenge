<script>
    /**
	 * @type {string}
	 */
     export let id;
</script>

<div {id} class="flex flex-col justify-center items-center w-full h-screen md:h-screen md:overflow-hidden relative">
    <div class="absolute inset-x-0 top-4 md:top-0 w-full h-screen md:h-full z-10">
        <div class="flex flex-col justify-center items-center text-center w-full h-80 relative">
            <h1 class="text-4xl md:text-6xl font-black font-fraunces-black text-white uppercase tracking-[.25em] pt-8">We are Creatives</h1>
            <div class="absolute inset-x-0 -bottom-16 flex justify-center items-center w-full h-auto">
                <img class="w-8 h-auto" src="/assets/img/icon-arrow-down.svg" alt="Arrow Down">
            </div>
        </div>
    </div>
    <img class="w-auto md:w-full h-screen md:h-screen object-center object-cover z-0" src="/assets/img/desktop/image-header.jpg" alt="ImageHeader" />
</div>
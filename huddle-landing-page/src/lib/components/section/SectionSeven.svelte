<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<section {id} class="flex justify-center items-center w-full h-screen relative">
    <div class="hidden md:block absolute inset-x-0 top-0 w-full h-auto">
        <img src="/assets/img/bg-section-bottom-desktop-2.svg" alt="Background Section Top Desktop Two">
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden absolute inset-x-0 top-0 w-full h-auto">
        <img src="/assets/img/bg-section-bottom-mobile-2.svg" alt="Background Section Bottom Mobile Two">
    </div>
    <div class="flex flex-col w-full h-auto max-w-4xl">
        <div class="flex flex-col justify-center items-center text-center">
            <h1 class="font-black text-2xl md:text-4xl mb-4 md:mb-8 font-poppins-black">Ready To Build Your Community?</h1>
            <button class="flex justify-center items-center w-full h-auto max-w-xs bg-pink rounded-full py-4 px-4 shadow">
                <span class="font-bold text-white">Get Started For Free</span>
            </button>
        </div>
    </div>
    <div class="hidden md:block absolute inset-x-0 -bottom-2 w-full h-auto">
        <img src="/assets/img/bg-footer-top-desktop.svg" alt="Background Footer Top Desktop">
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden absolute inset-x-0 -bottom-2 w-full h-auto">
        <img src="/assets/img/bg-footer-top-mobile.svg" alt="Background Footer Top Mobile">
    </div>
</section>
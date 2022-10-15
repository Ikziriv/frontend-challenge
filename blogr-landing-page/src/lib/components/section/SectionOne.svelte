<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<div {id} class="flex w-full h-screen rounded-bl-[100px] shadow-lg bg-gradient-to-r from-grd-very-light-red to-grd-light-red relative overflow-hidden">
    <!-- Desktop -->
    <div class="z-0 absolute inset-0 hidden md:flex justify-center items-center w-full h-screen bg-[url('/assets/img/bg-pattern-intro-desktop.svg')] bg-[length:3175px_3174px] bg-[center_left_-38rem] bg-no-repeat"></div>
    <!-- Mobile -->
    <div class="z-0 absolute left-0 bottom-0 flex md:hidden justify-center items-center w-full h-screen bg-[url('/assets/img/bg-pattern-intro-mobile.svg')] bg-[length:1324px_1323px] bg-[left_top_-16rem] bg-no-repeat"></div>
    <!-- Display -->
    <div class="z-10 absolute inset-0 flex justify-center items-center w-full h-screen">
        <div class="flex flex-col justify-center items-center text-center w-full md:w-auto h-auto px-6 md:px-0">
            <h1 class="font-overpass text-white text-4xl md:text-6xl mb-4 md:mb-4">A modern publishing platform</h1>
            <span class="font-ubuntu text-white text-lg md:text-2xl mb-16 md:mb-12">Grow your audience and build your online brand</span>
            <div class="flex flex-row space-x-4 w-auto h-auto">
                <a href="/" class="flex justify-center items-center py-2 px-4 md:px-8 rounded-full bg-white hover:bg-white/50 text-grd-light-red hover:text-white">
                    <span class="font-ubuntu-bold font-medium text-md">Start for Free</span>
                </a>
                
                <a href="/" class="flex justify-center items-center py-2 px-4 md:px-8 rounded-full bg-transparent hover:bg-white text-white hover:text-grd-light-red border border-white">
                    <span class="font-ubuntu-bold font-medium text-md">Learn More</span>
                </a>
            </div>
        </div>
    </div>
</div>
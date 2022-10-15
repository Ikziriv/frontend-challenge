<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<section {id} class="z-10 w-full h-screen md:h-96 bg-transparent rounded-bl-[100px] rounded-tr-[100px] relative">
    <!-- Display -->
    <div class="z-10 absolute inset-0 flex flex-col justify-center items-center w-full h-screen md:h-96 bg-transparent rounded-bl-[100px] rounded-tr-[100px] static">
        <div class="absolute -inset-y-32 md:-inset-y-32 left-0 w-auto h-auto z-0">
            <div class="flex justify-start md:justify-end items-start md:items-end w-auto h-screen md:h-full md:py-0">
                <img class="object-bottom w-full h-auto" src="/assets/img/illustration-phones.svg" alt="Phone">
            </div>
        </div>
    
        <div class="flex flex-row justify-center md:justify-end items-end md:items-center w-full h-screen md:h-auto z-10">
            <div class="flex flex-col md:space-y-6 w-auto h-auto max-w-xs md:max-w-lg md:mr-32 text-center md:text-left pb-24 md:pb-0">
                <h2 class="font-bold font-ubuntu-bold mb-8 md:mb-0 text-3xl md:text-2xl text-white">State of the Art Infrastructure</h2>
                <p class="font-ubuntu text-md md:text-sm text-white leading-relaxed">
                    With reliability and speed in mind, worldwide data center provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive
                </p>
            </div>
        </div>
    </div>
    <!-- Screen -->
    <div class="z-0 absolute inset-0 flex flex-col justify-center items-center w-full h-screen md:h-96 bg-vd-grayish-blue rounded-bl-[100px] rounded-tr-[100px] relative overflow-hidden">
        <div class="absolute -inset-y-32 md:inset-y-0 left-0 w-auto h-auto z-0">
            <div class="flex justify-start md:justify-end items-start md:items-end w-auto h-screen md:h-full md:py-0">
                <img class="object-bottom object-cover w-[1024px] md:w-[780px] h-auto" src="/assets/img/bg-pattern-circles.svg" alt="Pattern Circle">
            </div>
        </div>
    </div>
</section>
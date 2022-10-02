<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<section {id} class="flex justify-center items-center w-full h-screen md:h-screen py-8 md:py-16 relative">
    <div class="hidden md:block absolute inset-x-0 top-0 w-full h-auto">
        <img src="/assets/img/bg-section-bottom-desktop-2.svg" alt="Background Section Bottom Desktop Two">
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden absolute inset-x-0 top-0 w-full h-auto">
        <img src="/assets/img/bg-section-bottom-mobile-2.svg" alt="Background Section Bottom Mobile Two">
    </div>
    <div class="flex flex-col md:flex-row w-full h-auto">
        <div class="flex py-8 md:py-0 flex w-full md:w-1/2 h-auto justify-center items-center">
            <div class="flex flex-col justify-start items-start space-y-4 w-auto h-auto">
                <img class="w-64 md:w-96 h-auto" src="/assets/img/illustration-flowing-conversation.svg" alt="Flowing Conversation">
            </div>
        </div>
        <div class="flex py-8 md:py-0 flex w-full md:w-1/2 h-auto justify-center items-center">
            <div class="flex flex-col justify-start items-start space-y-4 w-auto h-auto">
                <div class="flex flex-col justify-center items-center md:items-start space-y-4 w-full md:w-auto h-auto text-center md:text-left px-4 md:px-0">
                    <h1 class="font-black text-2xl md:text-4xl mb-4 font-poppins-black">Flowing Conversation</h1>
                    <p class="text-base md:max-w-lg text-center md:text-left mb-4">
                        You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. 
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="hidden md:block absolute inset-x-0 -bottom-0 w-full h-auto">
        <img src="/assets/img/bg-section-top-desktop-2.svg" alt="Background Section Top Desktop Two">
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden absolute inset-x-0 -bottom-0 w-full h-auto">
        <img src="/assets/img/bg-section-top-mobile-2.svg" alt="Background Section Top Mobile Two">
    </div>
</section>
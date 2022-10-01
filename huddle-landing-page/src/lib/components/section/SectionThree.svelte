<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<section {id} class="flex justify-center items-center w-full h-auto md:h-screen relative">
    <div class="grid grid-cols-2 gap-4 w-full h-auto">
        <div class="col-span-full md:col-span-1 flex w-full h-auto justify-center items-center">
            <div class="flex flex-col justify-start items-start space-y-4 w-auto h-auto">
                <img class="w-8 h-auto" src="/assets/img/icon-communities.svg" alt="Icon Communities">
                <div class="flex flex-col justify-center items-center space-y-4 w-auto h-auto">
                    <h1 class="font-black text-6xl font-poppins-medium">1.4k+</h1>
                    <span class="text-base font-medium">Communities Formed</span>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 flex w-full h-auto justify-center items-center">
            <div class="flex flex-col justify-start items-start space-y-4 w-auto h-auto">
                <img class="w-8 h-auto" src="/assets/img/icon-messages.svg" alt="Icon Messages">
                <div class="flex flex-col justify-center items-center space-y-4 w-auto h-auto">
                    <h1 class="font-black text-6xl font-poppins-medium">2.7m+</h1>
                    <span class="text-base font-medium">Message Sent</span>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute inset-x-0 -bottom-4 w-full h-auto">
        <img src="/assets/img/bg-section-top-desktop-1.svg" alt="Background Section Top Desktop One">
    </div>
</section>
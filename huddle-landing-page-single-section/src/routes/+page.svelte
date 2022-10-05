<script>
    import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col justify-center items-center w-full h-auto md:h-screen bg-violet relative">
    <div class="absolute inset-0 z-0 hidden md:block z-0">
        <img class="hidden md:block w-full h-full object-cover object-center" src="/assets/img/bg-desktop.svg" alt="BgDesktop" />
    </div>
    <div class="absolute inset-x-0 top-0 w-full h-full block md:hidden z-0">
        <img class="block md:hidden w-full h-auto object-cover object-center" src="/assets/img/bg-mobile.svg" alt="BgMobile" />
    </div>
    <!-- Header -->
    <div class="md:absolute inset-x-0 top-0 flex justify-start items-start w-full h-16 md:h-auto">
        <div class="w-auto h-auto py-6 md:py-12 mt-4 md:mt-0 px-8 md:px-16">
            <img class="w-40 md:w-48 h-auto object-cover object-center" src="/assets/img/logo.svg" alt="Logo" />
        </div>
    </div>
    <!-- Main -->
    <div class="grid grid-cols-2 gap-0 md:gap-4 w-full h-auto p-4 md:p-8 lg:p-16 pt-16 md:pt-0 z-10">
        <div class="col-span-full md:col-span-1 w-full h-auto p-0 md:p-0 lg:p-0">
            <div class="flex justify-center items-center w-full h-full relative z-10">
                <img class="w-80 md:w-full h-full object-cover object-center z-10" src="/assets/img/illustration-mockups.svg" alt="IllustrationMockup" />
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto">
            <div class="flex flex-col justify-center items-center md:items-start w-full h-full max-w-lg p-4 md:p-8 bg-transparent">
                <div class="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto h-auto mb-2">
                    <h1 class="text-3xl md:text-4xl font-poppins-bold mb-2 md:mb-4 text-zinc-900 text-white">
                        Build The Community
                    </h1>
                    <h1 class="text-3xl md:text-4xl font-poppins-bold mb-2 md:mb-4 text-zinc-900 text-white">
                        Your Fans Will Love
                    </h1>
                </div>
                <p class="text-md md:text-sm text-grayish-blue font-open-sans mb-4 leading-relaxed text-white text-center md:text-left mb-4 md:mb-6 px-7 md:px-0">
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <button class="flex justify-center items-center w-auto md:w-auto h-auto bg-white rounded-full py-3 md:py-4 px-24 md:px-20 shadow-2xl">
                    <span class="font-normal text-violet font-open-sans">Register</span>
                </button>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <div class="md:absolute inset-x-0 bottom-0 flex justify-center md:justify-end items-center md:items-end w-full h-16 md:h-auto">
        <div class="w-auto h-auto py-4 md:py-12 px-4 md:px-16">
            <div class="flex flex-row w-auto h-auto space-x-4 pb-0 md:pb-0">
                <div class="flex justify-center items-center bg-transparent border p-2 md:p-3 rounded-full">
                    <Icon class="w-4 md:w-5 h-4 md:h-5 text-white" icon="ion:logo-facebook" />
                </div>
                <div class="flex justify-center items-center bg-transparent border p-2 md:p-3 rounded-full">
                    <Icon class="w-4 md:w-5 h-4 md:h-5 text-white" icon="ion:logo-twitter" />
                </div>
                <div class="flex justify-center items-center bg-transparent border p-2 md:p-3 rounded-full">
                    <Icon class="w-4 md:w-5 h-4 md:h-5 text-white" icon="ion:logo-instagram" />
                </div>
            </div>
        </div>
    </div>
</div>
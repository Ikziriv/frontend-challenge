<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<div {id} class="flex flex-col justify-center items-end w-full h-auto md:h-screen bg-white py-8 md:py-16 overflow-hidden relative">
    <div class="z-0 absolute inset-y-0 md:-left-48 hidden md:flex w-auto h-auto">
        <div class="flex justify-start items-center w-auto h-screen md:py-0">
            <img class="w-[680px] h-auto" src="/assets/img/illustration-laptop-desktop.svg" alt="Laptop">
        </div>
    </div>
    <div class="z-10 grid grid-cols-2 gap-4 w-full h-auto justify-center items-end px-6 md:px-32">
        <div class="col-span-full flex md:hidden justify-center items-center">
            <div class="flex justify-center items-center w-auto h-auto md:py-0">
                <img class="w-[580px] h-auto" src="/assets/img/illustration-laptop-mobile.svg" alt="Laptop">
            </div>
        </div>
        <div class="col-span-full flex w-full h-auto justify-end items-center">
            <div class="flex flex-col space-y-8 md:space-y-4 w-auto h-auto md:max-w-lg py-8 md:py-0">
                <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 md:px-0 space-y-6 w-auto h-auto">
                    <h2 class="font-bold font-ubuntu-bold text-3xl md:text-2xl text-vd-grayish-blue">Free, open, simple</h2>
                    <p class="font-ubuntu text-md md:text-sm leading-relaxed text-vd-grayish-blue">
                        Blogr is a free and open source application backed by a large community of helpful developer. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The arcitecture is clean and is relatively easy to learn.
                    </p>
                </div>
                
                <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 md:px-0 space-y-6 w-auto h-auto">
                    <h2 class="font-bold font-ubuntu-bold text-3xl md:text-2xl text-vd-grayish-blue">Powerful Tooling</h2>
                    <p class="font-ubuntu text-md md:text-sm leading-relaxed text-vd-grayish-blue">
                        Batteries included. We build a simple and straightforward CLI tools that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
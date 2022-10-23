<script lang="ts">
	import { pages, isMobileOpen } from '../stores';
</script>

<div class="flex flex-col w-full h-auto max-w-7xl bg-white">
    <div class="flex justify-between items-center w-full h-auto pt-8 md:pt-0 pb-8 md:pb-8">
        <img class="w-16 md:w-20 h-auto" src="/assets/img/logo.svg" alt="Logo Icon">
        <div class="hidden md:flex flex-col md:flex-row md:space-x-10 w-auto h-auto">
            {#each pages as { name, path }}
                <a href={path} class="text-sm md:text-lg font-medium text-very-dark-blue hover:text-soft-red">{name}</a>
            {/each}
        </div>
        <!-- Mobile Navigation -->
        <button on:click={() => ($isMobileOpen = !$isMobileOpen)} class="flex md:hidden justify-center items-center w-auto h-auto">
            <img class="w-auto h-auto" src="/assets/img/icon-menu.svg" alt="Icon Menu" />
        </button>
    </div>

    <div class="grid grid-cols-12 gap-4 md:gap-8 w-full h-auto md:h-screen">
        <div class="col-span-full md:col-span-8 w-full h-auto md:h-screen justify-center items-center">
            <div class="flex flex-col w-full h-auto md:h-screen justify-between items-center">
                <img class="hidden md:block w-full h-auto" src="/assets/img/image-web-3-desktop.jpg" alt="ImageWeb3-Desktop" />
                <img class="block md:hidden w-full h-auto" src="/assets/img/image-web-3-mobile.jpg" alt="ImageWeb3-Mobile" />
                
                <div class="grid grid-cols-2 gap-4 w-full h-auto md:h-72 border-none py-4 md:py-0">
                    <div class="col-span-full md:col-span-1 flex justify-start md:justify-end items-start md:items-end w-full h-auto md:h-full pr-16 md:pr-0">
                        <h1 class="text-4xl md:text-7xl font-black font-inter-extra-bold">The Bright Future of Web 3.0?</h1>
                    </div>
                    <div class="col-span-full md:col-span-1 flex justify-end items-end w-full h-auto md:h-full">
                        <div class="flex flex-col w-full h-auto">
                            <p class="text-md md:text-lg leading-relaxed mb-8">
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <button class="w-56 md:w-40 h-auto bg-soft-red hover:bg-very-dark-blue py-4 px-4 text-center">
                                <span class="font-bold font-inter-bold tracking-widest uppercase text-white text-md md:text-sm">Read More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-4 w-full h-auto md:h-screen justify-center items-center">
            <div class="flex flex-col space-y-4 w-full h-auto md:h-screen justify-start items-start bg-very-dark-blue p-8">
                <h1 class="font-bold font-inter-extra-bold text-5xl text-soft-orange px-0 pb-4 md:pb-8">New</h1>
                <div class="flex flex-col w-full h-32 md:h-36 bg-very-dark-blue border-b">
                    <h2 class="text-xl md:text-2xl pb-2 md:pb-2 font-bold font-inter-bold text-off-white hover:text-soft-orange">Hydrogen VS Electirc Cars</h2>
                    <p class="text-md md:text-lg text-off-white">Will hydrogen-fueled cars ever catch up to Evs?</p>
                </div>
                <div class="flex flex-col w-full h-32 md:h-36 bg-very-dark-blue border-b">
                    <h2 class="text-xl md:text-2xl pb-2 md:pb-2 font-bold font-inter-bold text-off-white hover:text-soft-orange">The Downside of AI Artistry</h2>
                    <p class="text-md md:text-lg text-off-white">What are the possible adverse effects of ond-demand AI image generation</p>
                </div>
                <div class="flex flex-col w-full h-32 md:h-36 bg-very-dark-blue border-b">
                    <h2 class="text-xl md:text-2xl pb-2 md:pb-2 font-bold font-inter-bold text-off-white hover:text-soft-orange">Is VC Funding Drying Up?</h2>
                    <p class="text-md md:text-lg text-off-white">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="grid grid-cols-3 gap-8 md:gap-1 w-full h-auto pt-10 md:pt-24 pb-16 md:pb-24">
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-white shadow-none border-none">
            <div class="flex flex-row space-x-4 md:space-x-8 w-auto h-full justify-center items-center">
                <img class="w-28 h-auto" src="/assets/img/image-retro-pcs.jpg" alt="RetroPCs">
                <div class="flex flex-col w-auto h-auto">
                    <span class="font-bold font-inter-bold text-4xl text-zinc-200 mb-1 md:mb-4">01</span>
                    <h1 class="font-bold font-inter-bold text-lg text-very-dark-blue hover:text-soft-red mb-1">Reviving Retro PCs</h1>
                    <p class="text-md md:text-md leading-relaxed">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
        </div>
        
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-white shadow-none border-none">
            <div class="flex flex-row space-x-4 md:space-x-8 w-auto h-full justify-center items-center">
                <img class="w-28 h-auto" src="/assets/img/image-top-laptops.jpg" alt="TopLaptops">
                <div class="flex flex-col w-auto h-auto">
                    <span class="font-bold font-inter-bold text-4xl text-zinc-200 mb-1 md:mb-4">02</span>
                    <h1 class="font-bold font-inter-bold text-lg text-very-dark-blue hover:text-soft-red mb-1">Top 10 Laptops of 2022</h1>
                    <p class="text-md md:text-md leading-relaxed">Our best picks for various needs and budgets.</p>
                </div>
            </div>
        </div>
        
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-white shadow-none border-none">
            <div class="flex flex-row space-x-4 md:space-x-8 w-auto h-full justify-center items-center">
                <img class="w-28 h-auto" src="/assets/img/image-gaming-growth.jpg" alt="GamingGrowth">
                <div class="flex flex-col w-auto h-auto">
                    <span class="font-bold font-inter-bold text-4xl text-zinc-200 mb-1 md:mb-4">03</span>
                    <h1 class="font-bold font-inter-bold text-lg text-very-dark-blue hover:text-soft-red mb-1">The Growth of Gaming</h1>
                    <p class="text-md md:text-md leading-relaxed">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    </div>
</div>
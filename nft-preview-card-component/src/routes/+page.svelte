<script>
	import { fade } from 'svelte/transition';
    import Icon from '@iconify/svelte';
	
	let hover = false;
    let navigating = false;
</script>

<div class="flex justify-center items-center w-full h-screen md:h-screen bg-bgm-dark-blue p-4 md:p-0">
    <div class="w-80 md:w-80 h-auto md:max-w-md bg-bgc-dark-blue rounded-2xl p-5 md:p-5 shadow-md">
        <div class="grid grid-cols-1 gap-0 w-full h-auto">
            <div class="col-span-full w-full h-64 md:h-auto rounded-2xl pb-4">
                <div class="justify-center items-center w-full h-full relative"
                    on:mouseenter={() => {
                        console.log("enter", navigating);
                        if (!navigating) {
                            hover = true;
                        }
                    }}
                    on:mouseleave={() => {
                        console.log("leave", navigating);
                        if (!navigating) {
                            hover = false;
                        }
                    }}>

                    {#if hover}
                    <div transition:fade class="absolute inset-0 w-full h-full rounded-xl">
                        <div class="flex justify-center items-center w-full h-full bg-cyan/50 rounded-xl">
                            <span class="w-auto h-auto">
                                <Icon class="w-6 md:w-8 h-6 md:h-8 text-white" icon="ion:eye" />
                            </span>
                        </div>
                    </div>
                    {/if}
                    <img class="rounded-xl w-full h-full object-cover object-center z-0" src="/image-equilibrium.jpg" alt="Equilibrium" />
                </div>
            </div>
            <div class="col-span-full w-full h-auto">
                <div class="flex flex-col space-y-2 justify-center items-start w-full h-auto p-2 bg-transparent">
                    <div class="flex flex-col space-y-3 w-auto h-auto">
                        <h1 class="text-xl font-outfit-black mb-2 text-white hover:text-cyan text-left">
                            Equilibrium #3429 
                        </h1>
                    </div>
                    <p class="text-sm text-soft-blue font-outfit px-0 leading-relaxed text-left pb-1">
                        Our Equilibrium collection promotes balance and calm.
                    </p>
                    <div class="flex flex-row justify-between items-center w-full h-auto">
                        <div class="flex space-x-2 items-center w-auto h-auto">
                            <img class="w-auto h-5" src="/icon-ethereum.svg" alt="Ethereum">
                            <span class="text-xs text-cyan font-outfit-bold uppercase">0.041Eth</span>
                        </div>
                        <div class="flex space-x-2 items-center w-auto h-auto">
                            <img class="w-auto h-5" src="/icon-clock.svg" alt="Clock">
                            <span class="text-xs text-soft-blue font-outfit">3 Days Left</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col space-y-4 justify-center items-start w-full h-auto p-2 pt-4 bg-transparent">
                    <div class="w-full h-0.5 bg-bgl-dark-blue"></div>
                    <div class="flex space-x-2 justify-start items-center w-auto h-auto">
                        <img class="w-8 h-8" src="/image-avatar.png" alt="AvatarImage">
                        <div class="flex space-x-1 items-center">
                            <span class="text-sm text-soft-blue">Creation of</span>
                            <span class="text-sm text-white hover:text-cyan">Jules Wyvern</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
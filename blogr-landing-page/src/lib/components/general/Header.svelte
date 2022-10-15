<script>
    import Icon from '@iconify/svelte';
</script>

<div class="z-40 fixed flex flex-row justify-between items-center w-full h-auto py-12 md:py-12 px-6 md:px-32">
    <div class="flex flex-row justify-center items-center">
        <div class="w-auto h-auto mr-0 md:mr-20">
            <img class="w-20 h-auto" src="/assets/img/logo.svg" alt="Blogr Logo">
        </div>
        <div class="hidden md:flex flex-row md:space-x-6">
            <a href="/" class="flex flex-row items-center space-x-2">
                <span class="font-ubuuntu-bold text-white">Product</span>
                <span class="w-auto h-auto">
                    <Icon class="w-2 h-2 text-white" icon="bi:caret-down-fill" />
                </span>
            </a>
            <a href="/" class="flex flex-row items-center space-x-2">
                <span class="font-ubuuntu-bold text-white">Company</span>
                <span class="w-auto h-auto">
                    <Icon class="w-2 h-2 text-white" icon="bi:caret-down-fill" />
                </span>
            </a>
            <a href="/" class="flex flex-row items-center space-x-2">
                <span class="font-ubuuntu-bold text-white">Contact</span>
                <span class="w-auto h-auto">
                    <Icon class="w-2 h-2 text-white" icon="bi:caret-down-fill" />
                </span>
            </a>
        </div>
    </div>

    <div class="hidden md:flex flex-row justify-center items-center space-x-4">
        <a href="/" class="w-auto h-auto">
            <span class="text-white font-ubuntu-bold font-medium text-md">Login</span>
        </a>
        <a href="/" class="flex justify-center items-center py-2 px-8 rounded-full bg-white hover:bg-white/50 text-grd-light-red hover:text-white">
            <span class="font-ubuntu-bold font-medium text-md">Sign Up</span>
        </a>
    </div>
</div>
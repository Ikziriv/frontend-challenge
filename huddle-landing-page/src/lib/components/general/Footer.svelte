<script>
    import Icon from '@iconify/svelte';
</script>
<footer class="flex justify-center items-center w-full h-screen px-4 md:px-8 relative bg-dark-cyan z-30">
    <div class="flex flex-col-reverse md:flex-row w-full items-start h-auto">
        <div class="flex w-full md:w-1/2 h-auto justify-center items-center">
            <div class="py-8 md:py-0 flex flex-col justify-start items-start space-y-4 w-full h-auto px-4 md:px-8">
                <div class="flex flex-col justify-center items-start w-auto h-auto">
                    <div class="flex items-center mb-4">
                        <img class="w-40 h-auto" src="/assets/img/logo.png" alt="Huddle Logo">
                    </div>
                    <p class="text-base max-w-xs text-left mb-4 text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sed facere, quae iste laudantium voluptatum 
                    </p>
                    <div class="flex flex-col w-auto h-auto space-y-2 mb-4 md:mb-8">
                        <div class="flex flex-row space-x-2">
                            <span class="text-white">
                                <Icon class="w-5 h-5" icon="ion:call-outline" />
                            </span>
                            <span class="text-white">Phone: +1-543-123-4567</span>
                        </div>
                        <div class="flex flex-row items-center space-x-2">
                            <span class="text-white">
                                <Icon class="w-5 h-5" icon="ion:mail-outline" />
                            </span>
                            <span class="text-white">example@huddle.com</span>
                        </div>
                    </div>
                    <div class="flex flex-row w-auto h-auto space-x-4 mt-4 md:mt-0">
                        <div class="flex justify-center items-center bg-white p-2 rounded-md">
                            <Icon class="w-5 h-5 text-dark-cyan hover:text-blue-500" icon="ion:logo-facebook" />
                        </div>
                        <div class="flex justify-center items-center bg-white p-2 rounded-md">
                            <Icon class="w-5 h-5 text-dark-cyan hover:text-pink" icon="ion:logo-instagram" />
                        </div>
                        <div class="flex justify-center items-center bg-white p-2 rounded-md">
                            <Icon class="w-5 h-5 text-dark-cyan hover:text-blue-300" icon="ion:logo-twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex w-full md:w-1/2 h-auto justify-center items-center">
            <div class="py-8 md:py-0 flex flex-col justify-center md:justify-start items-start space-y-4 w-auto h-auto px-4 md:px-8">
                <div class="flex flex-col justify-center items-start w-auto h-auto">
                    <h1 class="font-bold text-xl mb-4 uppercase text-white">Newsletter</h1>
                    <p class="text-base max-w-sm text-left mb-4 text-white">
                        To recieve tips on how to grow your company. sign up to our weekly newsletter. We'll never send you spam or pass on your email address
                    </p>
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-auto h-auto">
                        <div>
                            <input class="w-72 py-2 rounded-md" type="text">
                        </div>
                        <button class="bg-pink rounded-md py-2 px-2 md:px-8">
                            <span class="font-bold text-white">Subscribe</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
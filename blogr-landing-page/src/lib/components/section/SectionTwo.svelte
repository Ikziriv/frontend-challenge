<script>
    /**
	 * @type {any}
	 */
     export let id;
</script>

<div {id} class="z-0 flex flex-col justify-start items-center w-full h-auto md:h-screen bg-white py-8 md:py-16 overflow-hidden relative">
    <div class="flex w-auto h-auto py-4 px-4 mb-8 md:mb-16 text-center">
        <h1 class="font-bold font-ubuntu text-3xl md:text-4xl text-vd-grayish-blue">Design for the future</h1>
    </div>
    <div class="z-10 grid grid-cols-2 gap-4 w-full h-auto md:h-[450px] justify-start items-center px-6 md:px-32 pb-40 md:pb-0">
        <div class="col-span-full flex md:hidden justify-center items-center">
            <div class="flex justify-center items-center w-auto h-auto md:py-0">
                <img class="w-[580px] h-auto" src="/assets/img/illustration-editor-mobile.svg" alt="Editor">
            </div>
        </div>
        <div class="col-span-full flex justify-start items-center max-w-xl">
            <div class="flex flex-col space-y-8 md:space-y-4 w-full md:w-auto h-auto py-8 md:py-0">
                <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 md:px-0 space-y-6 w-auto h-auto">
                    <h2 class="font-bold font-ubuntu-bold text-3xl md:text-2xl text-vd-grayish-blue">Introducing an extensible editor</h2>
                    <p class="font-ubuntu text-md md:text-sm leading-relaxed text-vd-grayish-blue">
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                    </p>
                </div>
                
                <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 md:px-0 space-y-6 w-auto h-auto">
                    <h2 class="font-bold font-ubuntu-bold text-3xl md:text-2xl text-vd-grayish-blue">Robust content management</h2>
                    <p class="font-ubuntu text-md md:text-sm leading-relaxed text-vd-grayish-blue">
                        Flexible content management enables users to easily move throught posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="z-0 absolute inset-y-0 md:-right-40 hidden md:flex w-auto h-auto">
        <div class="flex justify-end items-center w-auto h-screen md:py-0">
            <img class="w-[580px] h-auto" src="/assets/img/illustration-editor-desktop.svg" alt="Editor">
        </div>
    </div>
</div>
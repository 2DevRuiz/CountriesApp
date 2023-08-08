<template>
    <div class=" h-screen bg-sky-200 w-full flex justify-center items-center flex-col gap-5 p-5">
        <div class="container mx-auto">
            <div class="grid grid-cols-4 gap-5">
                <div
                    class="w-full h-64 flex justify-center items-center bg-orange-300 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-2 transition-all">
                    <h1>Card Effec 1</h1>
                </div>
                <div
                    class=" w-full h-64  justify-start bg-sky-600 relative inline-flex items-center overflow-hidden transition-all rounded hover:bg-white group">
                    <!-- <h1>Card Effect 2</h1> -->
                    <span
                        className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span
                        className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        hover effect 2
                    </span>
                </div>
                <div class=" w-full h-72  flex justify-center items-center bg-sky-700">
                    <h1>Center hello</h1>
                </div>
                <div class="w-full h-64 flex justify-center items-center bg-sky-800">
                    <h1>Center hello</h1>
                </div>

            </div>
        </div>
        <div class="w-full h-72 flex  flex-col justify-center items-center bg-slate-500 gap-5">
            <button
                className=" shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
                hover effect 1
            </button>
            <button
                className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">

                <!-- {/* purple box */} -->
                <span
                    className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    hover effect 2
                </span>
            </button>
        </div>
        <div class="flex flex-col items-center">

            <h1 class="text-3xl font-bold mt-10">Translate Up on Hover</h1>
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="https://picsum.photos/400/500" alt="">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                            customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are
                            five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

            <h1 class="text-3xl font-bold mt-10">Translate Down on Hover</h1>
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-8 duration-500 ease-in-out">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="https://picsum.photos/seed/hover/400/500" alt="">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                            customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are
                            five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

            <h1 class="text-3xl font-bold mt-10">Scale Up on Hover</h1>
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="https://picsum.photos/seed/pic/400/500"
                            alt="Man looking at item at a store">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                            customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are
                            five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-96 bg-[#001128] p-5">
            <div class="flex justify-center items-center">
                <div class="relative w-[200px] h-[200px] bg-[#020223]">

                </div>
            </div>
        </div>


<div class="fixed bottom-4 right-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
            Feedback
        </button>
    </div>
    </div>
    <!-- <button onclick="buttonHandler()" title="Contact Sale"
        class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-100">&#9993;</button> -->
    
</template>
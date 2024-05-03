<script>
    import HeaderMenuLT from '$lib/components/HeaderMenuLT.svelte';
</script>

<!--  -->
<div class="min-h-screen max-w-screen-xl mx-auto">
    <main class="flex flex-col md:flex-row">
        <!-- LEFT -->
        <div class="flex flex-col h-1/2 md:h-screen w-full lg:w-3/5 overflow-hidden bg-img-1 bg-left-top bg-no-repeat bg-cover">
            <!-- header -->
            <header>
                <div class="ml-12 my-10">
                    <HeaderMenuLT />
                </div>
            </header>

            <div class="flex-1 content-end">
                <div class="flex">
                    <div class="flex-none text-gray-300 ml-8 md:ml-16 mb-8 md:mb-16 leading-4">
                        Summer<br>Collection<br>2020
                    </div>
                    <div class="flex-1"></div>
                    <div class="w-48 content-end mr-8 ml-20 mb-8 md:mb-20">
                        <div class="flex">
                            <div>
                                <button type="button" class="bg-transparent text-gray-300 cursor-pointer">Next</button>
                            </div>
                            <div class="flex-grow self-end"><hr class="h-1 border-solid border-gray-300 border-1 mx-2 mb-2"></div>
                            <div>
                                <button type="button" class="bg-transparent text-gray-300 cursor-pointer">Previous</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <!--  -->
            <div class="flex-1">
                <div class="text-white ml-8 md:ml-16 leading-none lg:leading-28 font-fnt-made-bon-voyage text-7xl lg:text-9.75xl font-light mt-3">
                    Summer<br>2020
                </div>
            </div>

            <!-- footer -->
            <footer class="w-full">
                <div class="flex flex-row">
                    <div class="basis-1/5 flex ml-10 mb-14">
                        <button type="button" class="bg-transparent text-gray-300 cursor-pointer flex-1 text-xs">FB</button>
                        <button type="button" class="bg-transparent text-gray-300 cursor-pointer flex-1 text-xs">PIN</button>
                        <button type="button" class="bg-transparent text-gray-300 cursor-pointer flex-1 text-xs">IG</button>
                    </div>

                    <div class="grow"></div>

                    <div class="basis-1/3 flex mr-1 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="fill-gray-300 flex-1" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="fill-gray-300 flex-1" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="fill-gray-300 flex-1" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3"/>
                        </svg>
                    </div>
                </div>
            </footer>
        </div>

        <!-- RIGHT -->
        <div class="flex flex-col h-1/2 md:h-screen w-full lg:w-2/5 overflow-hidden">
            <header class="flex">
                <div class="flex-1"></div>
                <div class="w-24 mr-10 my-8">
                    <button type="button" class="bg-transparent text-gray-600 cursor-pointer flex-1 text-xs font-extrabold mr-10">ENG</button>
                    <button type="button" class="bg-transparent text-gray-300 cursor-pointer flex-1 text-xs">FR</button>
                </div>
            </header>

			<div class="flex-1 content-end mb-14">
                <div class="flex flex-col">
                    <div class="flex justify-end mb-8 mr-28 ml-10">
                        <div class="bg-img-4 bg-left-top bg-no-repeat bg-cover h-40 w-28 md:h-72 md:w-52"></div>
                        <div class="absolute rotate-90 w-56 md:w-80 -mt-10 md:top-80 pb-96">
                            <div class="flex">
                                <div class="text-gray-600 text-xs">
                                    Ref. 6687/787
                                </div>
                                <div class="flex-grow place-content-center"><hr class="h-1 border-solid border-gray-600 border-1 mx-3 md:mx-7"></div>
                                <div class="text-gray-600 text-xs">
                                    White loose dress
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mx-14">
                        <div>
                            <div class="bg-img-3 bg-left-top bg-no-repeat bg-cover h-40 w-28 md:h-56 md:w-36"></div>
                        </div>
                        <div class="content-end flex-grow ml-10">
                            <button type="button" class="bg-transparent text-gray-600 text-xs font-extrabold uppercase cursor-pointer border-solid border-gray-400 border-2 px-3 w-full h-14">shop now</button>
                        </div>
                    </div>
                </div>
            </div>
		</div>

    </main>
</div>

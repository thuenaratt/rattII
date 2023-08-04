<template>
    <div>
        <title>Design of the Week Template 14 - Pinegrow Web Editor</title>
        <body class="text-gray-500">
            <main>
                <section class="relative text-gray-300 bg-secondary-500 poster">
                    <div class="container relative pt-4 mx-auto">
                        <nav class="flex flex-wrap items-center px-4 py-2">
                            <a href="#"
                                class="inline-flex mr-4 font-serif text-2xl font-bold leading-none text-white uppercase hover:text-gray-300"> N & R Beauty </a>
                            <div class="px-2 ml-auto lg:order-2">
                                <div class="flex flex-row ml-auto">
                                    <a href="#" class="px-2 py-4 text-white hover:text-gray-300" aria-label="Search"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            width="1.25em" height="1.25em" class="inline-block">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                                                </path>
                                            </g>
                                        </svg></a>
                                    <a href="#" class="px-2 py-4 text-white hover:text-gray-300" aria-label="View cart"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            width="1.25em" height="1.25em" class="inline-block">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z">
                                                </path>
                                            </g>
                                        </svg><span>(0)</span></a>
                                    <a href="#" class="px-2 py-4 text-white hover:text-gray-300" aria-label="Account"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            width="1.25em" height="1.25em" class="inline-block">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">
                                                </path>
                                            </g>
                                        </svg></a>
                                </div>
                            </div>
                            <button class="px-3 py-2 text-white rounded hover:bg-primary-500 hover:text-white lg:hidden"
                                data-name="nav-toggler"
                                data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
                                data-pg-ia-apply="$nav [data-name=nav-toggler]">
                                <span class="block w-6 my-1 border-b-2 border-current"></span>
                                <span class="block w-6 my-1 border-b-2 border-current"></span>
                                <span class="block w-6 my-1 border-b-2 border-current"></span>
                            </button>
                            <div class="flex-1 hidden w-full space-y-2 lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto"
                                data-name="nav-menu">
                                <div class="flex flex-col mx-auto lg:flex-row">
                                    <router-link to="/">
                                        <a href="#" class="py-2 text-white hover:text-gray-300 lg:p-4">Home</a>
                                    </router-link>
                                    <a href="#" class="py-2 text-white hover:text-gray-300 lg:p-4">Shop</a>
                                    <a href="#" class="py-2 text-white hover:text-gray-300 lg:p-4">About</a>
                                    <!-- <a href="#" class="py-2 text-white hover:text-gray-300 lg:p-4"></a> -->
                                    <a href="#" class="py-2 text-white hover:text-gray-300 lg:p-4">Page</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="container px-4 mx-auto py-36">
                        <div class="flex flex-wrap items-center -mx-4 space-y-6 lg:space-y-0">
                            <div class="w-full px-4 md:w-10/12 lg:w-6/12 xl:w-5/12">
                                <h1
                                    class="mb-4 text-4xl font-bold text-white capitalize md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl">
                                    Authentic Products For Your Everyday Skincare</h1>
                                <p class="mb-6 sm:w-8/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                    ac sagittis neque, vel egestas est.</p>
                                <a href="#"
                                    class="inline-block px-6 py-2 m-1 text-white rounded bg-primary-500 hover:bg-primary-600">Shop
                                    Now</a>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" fill="currentColor"
                        class="block mt-12 text-white">
                        <path d="m0 90 120-16c120-16 360-48 600-48s480 32 600 48l120 16v50.023H0Z" opacity=".6" />
                        <path d="m0 110 120-16c120-16 360-48 600-48s480 32 600 48l120 16v50.023H0Z" />
                    </svg>
                </section>
                <section class="py-24">
                    <div class="container relative px-4 mx-auto">
                        <div class="flex flex-wrap items-center -mx-4">
                            <div class="w-full p-4 lg:w-7/12">
                                <h2 class="mb-2 text-lg font-medium text-primary-500">About Products</h2>
                                <h3 class="mb-6 text-4xl font-bold text-gray-800 capitalize">All the care you need</h3>
                                <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar
                                    faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel
                                    egestas est. Aenean elementum, erat at aliquet hendrerit, elit nisl posuere tortor, id
                                    suscipit diam dui sed nisi. Morbi sollicitudin massa vel tortor consequat, eget semper
                                    nisl fringilla. Maecenas at hendrerit odio. Sed in mi eu quam suscipit bibendum quis at
                                    orci. Pellentesque fermentum nisl purus, et iaculis lectus pharetra sit amet.</p>
                                <div class="flex flex-wrap justify-center -mx-4">
                                    <div class="w-full p-4 sm:w-6/12">
                                        <div class="flex flex-wrap md:space-x-4">
                                            <div class="w-full py-1 md:w-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.41 186.36"
                                                    width="4rem" height="4rem" class="w-16 h-16 text-primary-500">
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path class="clsZZZ-1"
                                                                d="m137.16 66.17 18.13-20.99-20.44-17.66-32.91 38.1.64.55" />
                                                            <rect class="clsZZZ-1" x="121.3" y="18.55" width="60.78"
                                                                height="20.26" rx="10.13" ry="10.13"
                                                                transform="rotate(40.82 151.705 28.684)" />
                                                            <path
                                                                d="M36.59 112.5a44 44 0 0 0 43.89 41h53.33a44 44 0 0 0 44-44V75.83a9.65 9.65 0 0 0-9.66-9.66h-122a9.66 9.66 0 0 0-9.67 9.66V81"
                                                                stroke="#212683" fill="none" stroke-miterlimit="10"
                                                                stroke-width="6" />
                                                            <path
                                                                d="M63.15 153.5h88v9.83a4.83 4.83 0 0 1-4.83 4.83H68a4.83 4.83 0 0 1-4.83-4.83v-9.83h-.02z"
                                                                fill="none" stroke-miterlimit="10" stroke-width="6"
                                                                stroke="#1f2687" />
                                                            <path class="clsZZZ-4"
                                                                d="M37.14 7.85h-4a1.73 1.73 0 0 1-1.74-1.73v-4A2.07 2.07 0 0 0 29.72 0a2 2 0 0 0-2.25 2v4.12a1.73 1.73 0 0 1-1.73 1.73h-4a2.07 2.07 0 0 0-2.09 1.68 2 2 0 0 0 1.94 2.25h4.15a1.73 1.73 0 0 1 1.73 1.73v4a2.07 2.07 0 0 0 1.68 2.09 2 2 0 0 0 2.25-1.94v-4.15a1.73 1.73 0 0 1 1.73-1.73h4.15a2 2 0 0 0 1.94-2.25 2.07 2.07 0 0 0-2.08-1.68zM17.51 174.58h-4a1.73 1.73 0 0 1-1.73-1.73v-4a2.07 2.07 0 0 0-1.68-2.09 2 2 0 0 0-2.25 1.94v4.15a1.73 1.73 0 0 1-1.73 1.73h-4A2.07 2.07 0 0 0 0 176.26a2 2 0 0 0 2 2.25h4.12a1.73 1.73 0 0 1 1.73 1.73v4a2.07 2.07 0 0 0 1.68 2.09 2 2 0 0 0 2.25-1.94v-4.15a1.73 1.73 0 0 1 1.73-1.73h4.15a2 2 0 0 0 1.94-2.25 2.07 2.07 0 0 0-2.09-1.68zm179.63.79h-2.4a1 1 0 0 1-1-1v-2.4a1.24 1.24 0 0 0-1-1.26 1.18 1.18 0 0 0-1.35 1.17v2.49a1 1 0 0 1-1 1h-2.4a1.24 1.24 0 0 0-1.26 1 1.18 1.18 0 0 0 1.17 1.35h2.49a1 1 0 0 1 1 1v2.4a1.24 1.24 0 0 0 1 1.26 1.18 1.18 0 0 0 1.35-1.17v-2.49a1 1 0 0 1 1-1h2.49a1.18 1.18 0 0 0 1.17-1.35 1.24 1.24 0 0 0-1.26-1z" />
                                                            <circle class="clsZZZ-4" cx="36.07" cy="97.33" r="3.18" />
                                                            <path d="M177.81 86.17H98.48m-4.33 0H81.48m96.33 23.33h-49.19"
                                                                fill="none" stroke="#212683" stroke-miterlimit="10"
                                                                stroke-width="6" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="w-full py-1 md:flex-1 md:w-full">
                                                <h4 class="mb-2 text-xl font-medium text-gray-900">Best Quality Ingredients
                                                </h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-4 sm:w-6/12">
                                        <div class="flex flex-wrap md:space-x-4">
                                            <div class="w-full py-1 md:w-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.12 200.36"
                                                    width="4rem" height="4rem" class="w-16 h-16 text-primary-500">
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                d="M113.95 101.69h57.46a10.38 10.38 0 0 1 10.38 10.38v27.52a47.25 47.25 0 0 1-47.26 47.25H61.87a47.25 47.25 0 0 1-47.25-47.25v-27.52A10.38 10.38 0 0 1 25 101.69h57.45"
                                                                stroke-miterlimit="10" stroke-width="6" stroke="#212683"
                                                                fill="none" />
                                                            <path
                                                                d="M113.95 101.69h51.33A20.28 20.28 0 0 0 145 81.41a2.71 2.71 0 0 1-2.25-4.23 13.25 13.25 0 0 0-11-20.63h-23.22c-12.67 0-17-22.65-18.23-31.65a2.6 2.6 0 0 0-4.06-1.81c-6.86 5-10.65 17.82-12.44 26a9.39 9.39 0 0 1-9.15 7.42 13.23 13.23 0 0 0-11 20.63 2.71 2.71 0 0 1-2.26 4.23 20.28 20.28 0 0 0-20.28 20.28h51.34"
                                                                fill="none" stroke="#1f2687" stroke-miterlimit="10"
                                                                stroke-width="6" />
                                                            <path class="clsYY-3"
                                                                d="M108.71 153.81a35.85 35.85 0 0 0-9.83 32.35A35.88 35.88 0 0 0 141.06 144a35.85 35.85 0 0 0-32.35 9.81z" />
                                                            <path class="clsYY-3"
                                                                d="M87.69 153.81a35.85 35.85 0 0 1 9.83 32.35A35.88 35.88 0 0 1 55.34 144a35.85 35.85 0 0 1 32.35 9.81z" />
                                                            <path class="clsYY-4"
                                                                d="M32.13 7.85h-4a1.73 1.73 0 0 1-1.73-1.73v-4A2.07 2.07 0 0 0 24.71 0a2 2 0 0 0-2.24 2v4.12a1.73 1.73 0 0 1-1.73 1.73h-4a2.07 2.07 0 0 0-2.09 1.68 2 2 0 0 0 1.94 2.25h4.15a1.73 1.73 0 0 1 1.73 1.73v4a2.07 2.07 0 0 0 1.68 2.09 2 2 0 0 0 2.25-1.94v-4.15a1.73 1.73 0 0 1 1.73-1.73h4.15a2 2 0 0 0 1.94-2.25 2.07 2.07 0 0 0-2.09-1.68zM17.51 188.58h-4a1.73 1.73 0 0 1-1.73-1.73v-4a2.07 2.07 0 0 0-1.68-2.09 2 2 0 0 0-2.25 1.94v4.15a1.73 1.73 0 0 1-1.73 1.73h-4A2.07 2.07 0 0 0 0 190.26a2 2 0 0 0 2 2.25h4.12a1.73 1.73 0 0 1 1.73 1.73v4a2.07 2.07 0 0 0 1.68 2.09 2 2 0 0 0 2.25-1.94v-4.15a1.73 1.73 0 0 1 1.73-1.73h4.15a2 2 0 0 0 1.94-2.25 2.07 2.07 0 0 0-2.09-1.68zM195.47 44.79h-3.13a1.35 1.35 0 0 1-1.34-1.35v-3.13a1.62 1.62 0 0 0-1.31-1.64 1.53 1.53 0 0 0-1.76 1.52v3.24a1.35 1.35 0 0 1-1.35 1.35h-3.13a1.62 1.62 0 0 0-1.64 1.31 1.53 1.53 0 0 0 1.52 1.76h3.24a1.35 1.35 0 0 1 1.35 1.35v3.13a1.62 1.62 0 0 0 1.31 1.67 1.53 1.53 0 0 0 1.77-1.54v-3.25a1.35 1.35 0 0 1 1.35-1.35h3.24a1.53 1.53 0 0 0 1.52-1.76 1.62 1.62 0 0 0-1.64-1.31z" />
                                                            <circle class="clsYY-4" cx="98.2" cy="101.69" r="3.18" />
                                                            <path
                                                                d="M14.62 120.51h86.76m3.24 0h15.35M51.69 72.54h49.69m3.24 0h9.25"
                                                                fill="none" stroke="#212683" stroke-miterlimit="10"
                                                                stroke-width="6" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="w-full py-1 md:flex-1 md:w-full">
                                                <h4 class="mb-2 text-xl font-medium text-gray-900">No Harmful Chemicals</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-4 sm:w-6/12">
                                        <div class="flex flex-wrap md:space-x-4">
                                            <div class="w-full py-1 md:w-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.45 205.19"
                                                    width="4rem" height="4rem" class="w-16 h-16 text-primary-500">
                                                   
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                d="M64.22 45.05A68.87 68.87 0 0 1 93 3.61 68.81 68.81 0 0 1 93 118a68.86 68.86 0 0 1-28.78-41.45"
                                                                stroke="#212683" stroke-miterlimit="10" stroke-width="6"
                                                                fill="none" />
                                                            <path class="clsXX-2"
                                                                d="M113.1 132.39a68.74 68.74 0 0 0-18.84 62 68.82 68.82 0 0 0 80.89-80.89 68.74 68.74 0 0 0-62.05 18.89z" />
                                                            <path class="clsXX-2"
                                                                d="M72.8 132.39a68.74 68.74 0 0 1 18.84 62 68.82 68.82 0 0 1-80.89-80.89 68.74 68.74 0 0 1 62.05 18.89z" />
                                                            <path class="clsXX-3" d="M92.95 118v77.74" />
                                                            <path class="clsXX-4"
                                                                d="M172.85 40.78H169a1.67 1.67 0 0 1-1.67-1.67v-3.86a2 2 0 0 0-1.62-2 1.89 1.89 0 0 0-2.16 1.87v4a1.67 1.67 0 0 1-1.67 1.67H158a2 2 0 0 0-2 1.62 1.89 1.89 0 0 0 1.87 2.16h4a1.67 1.67 0 0 1 1.67 1.67v3.86a2 2 0 0 0 1.62 2 1.89 1.89 0 0 0 2.16-1.87v-4a1.67 1.67 0 0 1 1.68-1.67h4a1.89 1.89 0 0 0 1.87-2.17 2 2 0 0 0-2.02-1.61zM19.43 193.85h-3.86a1.67 1.67 0 0 1-1.67-1.67v-3.86a2 2 0 0 0-1.62-2 1.89 1.89 0 0 0-2.16 1.87v4a1.67 1.67 0 0 1-1.67 1.67H4.6a2 2 0 0 0-2 1.62 1.89 1.89 0 0 0 1.87 2.16h4a1.67 1.67 0 0 1 1.67 1.67v3.86a2 2 0 0 0 1.62 2 1.89 1.89 0 0 0 2.16-1.87v-4a1.67 1.67 0 0 1 1.67-1.67h4a1.89 1.89 0 0 0 1.87-2.17 2 2 0 0 0-2.03-1.61zM8.83 7.57h-2a.87.87 0 0 1-.87-.87v-2a1 1 0 0 0-.85-1.06A1 1 0 0 0 4 4.6v2.1a.87.87 0 0 1-.87.87h-2A1 1 0 0 0 0 8.42a1 1 0 0 0 1 1.13h2.1a.87.87 0 0 1 .87.87v2a1 1 0 0 0 .85 1.06 1 1 0 0 0 1.13-1v-2.1a.87.87 0 0 1 .87-.87h2.1a1 1 0 0 0 1-1.13 1 1 0 0 0-1.09-.81z" />
                                                            <circle class="clsXX-4" cx="62.45" cy="60.81" r="3.18" />
                                                            <path class="clsXX-3"
                                                                d="M106.55 106.02V63.99m0-17.38v11.01m33.4 128.67v-32.3m0-12.88v5.39" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="w-full py-1 md:flex-1 md:w-full">
                                                <h4 class="mb-2 text-xl font-medium text-gray-900">100% Vegan</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-4 sm:w-6/12">
                                        <div class="flex flex-wrap md:space-x-4">
                                            <div class="w-full py-1 md:w-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.62 214.39"
                                                    width="4rem" height="4rem" class="w-16 h-16 text-primary-500">
                                                    
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                d="M102.08 173c22.68 1.66 39.86 9.54 39.86 19 0 10.68-21.84 19.33-48.77 19.33S44.39 202.68 44.39 192c0-9.48 17.23-17.37 39.95-19"
                                                                stroke-miterlimit="10" stroke-width="6" stroke="#212683"
                                                                fill="none" />
                                                            <path
                                                                d="M110.2 4.62a78.66 78.66 0 0 1 19.21 146.6A88.56 88.56 0 0 0 102.08 173a80.5 80.5 0 0 0-7.89 11.31l-1 1.78-1-1.78A85 85 0 0 0 84.34 173a81.25 81.25 0 0 0-26.44-21.27A78.67 78.67 0 0 1 14.55 79C15.66 41.76 43.14 10.8 78.7 4.1"
                                                                fill="none" stroke="#1f2687" stroke-miterlimit="10"
                                                                stroke-width="6" />
                                                            <path class="clsWW-3"
                                                                d="M76.13 72.31a40.2 40.2 0 0 1 17-25.38 40.2 40.2 0 0 1 17 25.38" />
                                                            <path class="clsWW-4"
                                                                d="M104.94 76.74a40.16 40.16 0 0 0-11 36.24 40.2 40.2 0 0 0 47.25-47.25 40.16 40.16 0 0 0-36.25 11.01z" />
                                                            <path class="clsWW-4"
                                                                d="M81.4 76.74a40.16 40.16 0 0 1 11 36.26 40.2 40.2 0 0 1-47.24-47.26 40.16 40.16 0 0 1 36.24 11z" />
                                                            <path class="clsWW-5"
                                                                d="M197.51 173.1h-4a1.73 1.73 0 0 1-1.73-1.73v-4a2.07 2.07 0 0 0-1.68-2.09 2 2 0 0 0-2.25 1.94v4.15a1.73 1.73 0 0 1-1.73 1.73h-4a2.07 2.07 0 0 0-2.09 1.68A2 2 0 0 0 182 177h4.15a1.73 1.73 0 0 1 1.73 1.73v4a2.07 2.07 0 0 0 1.68 2.09 2 2 0 0 0 2.25-1.94v-4.15a1.73 1.73 0 0 1 1.73-1.73h4.15a2 2 0 0 0 1.94-2.25 2.07 2.07 0 0 0-2.12-1.65zm-180-15h-4a1.73 1.73 0 0 1-1.73-1.73v-4a2.07 2.07 0 0 0-1.68-2.09 2 2 0 0 0-2.25 1.94v4.15a1.73 1.73 0 0 1-1.73 1.73h-4A2.07 2.07 0 0 0 0 159.77 2 2 0 0 0 2 162h4.12a1.73 1.73 0 0 1 1.73 1.73v4a2.07 2.07 0 0 0 1.68 2.09 2 2 0 0 0 2.25-1.94v-4.15a1.73 1.73 0 0 1 1.73-1.73h4.15a2 2 0 0 0 1.94-2.25 2.07 2.07 0 0 0-2.09-1.65zm173-147.02h-2.4a1 1 0 0 1-1-1V7.63a1.24 1.24 0 0 0-1-1.26 1.18 1.18 0 0 0-1.35 1.17V10a1 1 0 0 1-1 1h-2.4a1.24 1.24 0 0 0-1.26 1 1.18 1.18 0 0 0 1.17 1.35h2.49a1 1 0 0 1 1 1v2.4a1.24 1.24 0 0 0 1 1.26 1.18 1.18 0 0 0 1.3-1.01v-2.53a1 1 0 0 1 1-1h2.49a1.18 1.18 0 0 0 1.17-1.35 1.24 1.24 0 0 0-1.21-1.04z" />
                                                            <circle class="clsWW-5" cx="94.72" cy="3.18" r="3.18" />
                                                            <path class="clsWW-3" d="M33.6 30.24h64.3m5.58 0h9.5" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="w-full py-1 md:flex-1 md:w-full">
                                                <h4 class="mb-2 text-xl font-medium text-gray-900">100% Organic</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full p-4 lg:w-5/12">
                                <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGNsaW5pY3xlbnwwfHx8fDE2MzQxMDg3OTc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=650&fit=crop"
                                    class="w-full rounded" alt="..." width="600" height="650" />
                            </div>
                        </div>
                    </div>
                </section>
              
                <section class="py-24 text-center text-gray-500">
                    <div class="container relative px-4 mx-auto">
                        <div class="flex flex-wrap items-center mb-12 -mx-4">
                            <div class="w-full px-4 mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12">
                                <h2 class="mb-2 text-lg font-medium text-primary-500">Why Us</h2>
                                <h3 class="mb-4 text-4xl font-bold text-gray-800 capitalize">Why people love us</h3>
                                <p>Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Curabitur ac sagittis neque, vel egestas est.</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center -mx-4">
                            <div class="w-full p-4 md:w-6/12 lg:w-4/12">
                                <div class="lg:p-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        width="2.5rem" height="2.5rem" class="inline-block mb-4 text-gray-900">
                                        <path
                                            d="M15.199 9.945a2.6 2.6 0 0 1-.79-1.551l-.403-3.083-2.73 1.486a2.6 2.6 0 0 1-1.72.273L6.5 6.5l.57 3.056a2.6 2.6 0 0 1-.273 1.72l-1.486 2.73 3.083.403a2.6 2.6 0 0 1 1.55.79l2.138 2.257 1.336-2.807a2.6 2.6 0 0 1 1.23-1.231l2.808-1.336-2.257-2.137zm.025 5.563l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.357-.182l-5.107-.668a.6.6 0 0 1-.449-.881l2.462-4.524a.6.6 0 0 0 .062-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.063.943a.6.6 0 0 0 .396-.062l4.524-2.462a.6.6 0 0 1 .881.45l.668 5.106a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284zm.797 1.927l1.414-1.414 4.243 4.242-1.415 1.415-4.242-4.243z" />
                                    </svg>
                                    <h4 class="mb-4 text-xl font-bold text-gray-900 capitalize">High Quality Products</h4>
                                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                        pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.</p>
                                </div>
                            </div>
                            <div class="w-full p-4 md:w-6/12 lg:w-4/12">
                                <div class="lg:p-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        width="2.5rem" height="2.5rem" class="inline-block mb-4 text-gray-900">
                                        <path
                                            d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                    </svg>
                                    <h4 class="mb-4 text-xl font-bold text-gray-900 capitalize">Free Shipping</h4>
                                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                        pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.</p>
                                </div>
                            </div>
                            <div class="w-full p-4 md:w-6/12 lg:w-4/12">
                                <div class="lg:p-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        width="2.5rem" height="2.5rem" class="inline-block mb-4 text-gray-900">
                                        <path
                                            d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z" />
                                    </svg>
                                    <h4 class="mb-4 text-xl font-bold text-gray-900 capitalize">Customer Support</h4>
                                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                        pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="container py-2 mx-auto">
                    <div class="lg:mx-auto lg:w-7/12">
                        <hr>
                    </div>
                </div>
                <section class="py-24 text-center text-gray-500">
                    <div class="container relative px-4 mx-auto">
                        <div class="flex flex-wrap items-center -mx-4">
                            <div class="w-full px-4 mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12">
                                <h3 class="mb-6 text-4xl font-bold text-gray-800 capitalize">Sign up today and get 10% off
                                    on your first purchase.</h3>
                                <div class="w-full px-4 mx-auto md:w-10/12 lg:w-9/12">
                                    <form>
                                        <div class="flex flex-wrap items-center -mx-2">
                                            <div class="w-full p-1 sm:flex-1">
                                                <input class="w-full px-4 py-2 text-gray-600 border rounded appearance-none"
                                                    type="email" required placeholder="Enter your email address..." />
                                            </div>
                                            <div class="w-full p-1 text-right sm:flex-initial sm:w-auto">
                                                <a href="#"
                                                    class="inline-block px-6 py-2 text-white rounded bg-primary-500 hover:bg-primary-600">Sign
                                                    Me Up</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </body>
    </div>
</template>
<style>
.clsZZZ-1 {
    stroke-miterlimit: 10;
    stroke-width: 6px;
    fill: none;
    stroke: #1f2687;
}

.clsZZZ-4 {
    fill: #212683;
}
.clsWW-3,
                                                            .clsWW-4 {
                                                                stroke: #212683;
                                                                stroke-miterlimit: 10;
                                                                stroke-width: 6px;
                                                            }

                                                            .clsWW-3 {
                                                                fill: none;
                                                            }

                                                            .clsWW-4 {
                                                                fill: none;
                                                            }

                                                            .clsWW-5 {
                                                                fill: #212683;
                                                            }

*,
::before,
::after {
    box-sizing: border-box;
}

/**
    Use a more readable tab size (opinionated).
    */

html {
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}

/**
    1. Correct the line height in all browsers.
    2. Prevent adjustments of font size after orientation changes in iOS.
    */

html {
    line-height: 1.15;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
}

body {
    margin: 0;
}
body {
    font-family:
        system-ui,
        -apple-system,
        /* Firefox supports this but not yet `system-ui` */
        'Segoe UI',
        Roboto,
        Helvetica,
        Arial,
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji';
}

hr {
    height: 0;
    /* 1 */
    color: inherit;
    /* 2 */
}
abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}

b,
strong {
    font-weight: bolder;
}

code,
kbd,
samp,
pre {
    font-family:
        ui-monospace,
        SFMono-Regular,
        Consolas,
        'Liberation Mono',
        Menlo,
        monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
}

small {
    font-size: 80%;
}
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}
table {
    text-indent: 0;
    /* 1 */
    border-color: inherit;
    /* 2 */
}
button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    /* 1 */
    font-size: 100%;
    /* 1 */
    line-height: 1.15;
    /* 1 */
    margin: 0;
    /* 2 */
}
button,
select {
    /* 1 */
    text-transform: none;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance: button;
}
::-moz-focus-inner {
    border-style: none;
    padding: 0;
}
:-moz-focusring {
    outline: 1px dotted ButtonText;
}
:-moz-ui-invalid {
    box-shadow: none;
}
legend {
    padding: 0;
}
progress {
    vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto;
}


[type='search'] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
}

::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
}

summary {
    display: list-item;
}


blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
    margin: 0;
}

button {
    background-color: transparent;
    background-image: none;
}

fieldset {
    margin: 0;
    padding: 0;
}

ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}



html {
    font-family: 'Mali', sans-serif;
    /* 1 */
    line-height: 1.5;
    /* 2 */
}



body {
    font-family: inherit;
    line-height: inherit;
}


*,
::before,
::after {
    box-sizing: border-box;
    /* 1 */
    border-width: 0;
    /* 2 */
    border-style: solid;
    /* 2 */
    border-color: currentColor;
    /* 2 */
}


hr {
    border-top-width: 1px;
}
img {
    border-style: solid;
}

textarea {
    resize: vertical;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    opacity: 1;
    color: #9ca3af;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    opacity: 1;
    color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
}

button,
[role="button"] {
    cursor: pointer;
}

table {
    border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}
a {
    color: inherit;
    text-decoration: inherit;
}
button,
input,
optgroup,
select,
textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
}

/**
    * Use the configured 'mono' font family for elements that
    * are expected to be rendered with a monospace font, falling
    * back to the system monospace stack if there is no configured
    * 'mono' font family.
    */

pre,
code,
kbd,
samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}



img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
    display: block;
    /* 1 */
    vertical-align: middle;
    /* 2 */
}

/**
    * Constrain images and videos to the parent width and preserve
    * their intrinsic aspect ratio.
    *
    * https://github.com/mozdevs/cssremedy/issues/14
    */

img,
video {
    max-width: 100%;
    height: auto;
}

/**
    * Ensure the default browser behavior of the `hidden` attribute.
    */

[hidden] {
    display: none;
}

*,
::before,
::after {
    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}

.container {
    width: 100%;
}

@media (min-width: 640px) {

    .container {
        max-width: 640px;
    }
}

@media (min-width: 768px) {

    .container {
        max-width: 768px;
    }
}

@media (min-width: 1024px) {

    .container {
        max-width: 1024px;
    }
}

@media (min-width: 1280px) {

    .container {
        max-width: 1280px;
    }
}

@media (min-width: 1536px) {

    .container {
        max-width: 1536px;
    }
}

.relative {
    position: relative;
}

.m-1 {
    margin: 0.25rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.-mx-4 {
    margin-left: -1rem;
    margin-right: -1rem;
}

.my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}

.-mx-2 {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
}

.-mx-3 {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
}

.my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.mr-4 {
    margin-right: 1rem;
}

.mr-1 {
    margin-right: 0.25rem;
}

.ml-auto {
    margin-left: auto;
}

.mr-auto {
    margin-right: auto;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-12 {
    margin-bottom: 3rem;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

.mb-0 {
    margin-bottom: 0px;
}

.-mt-4 {
    margin-top: -1rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.-mt-12 {
    margin-top: -3rem;
}

.mt-12 {
    margin-top: 3rem;
}

.mb-1 {
    margin-bottom: 0.25rem;
}

.mr-3 {
    margin-right: 0.75rem;
}

.mt-5 {
    margin-top: 1.25rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-0 {
    margin-top: 0px;
}

.mb-8 {
    margin-bottom: 2rem;
}

.mb-5 {
    margin-bottom: 1.25rem;
}

.mr-2 {
    margin-right: 0.5rem;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
}

.flex {
    display: flex;
}

.inline-flex {
    display: inline-flex;
}

.hidden {
    display: none;
}

.h-5 {
    height: 1.25rem;
}

.h-auto {
    height: auto;
}

.h-4 {
    height: 1rem;
}

.h-16 {
    height: 4rem;
}

.w-5 {
    width: 1.25rem;
}

.w-6 {
    width: 1.5rem;
}

.w-full {
    width: 100%;
}

.w-6\/12 {
    width: 50%;
}

.w-3\/12 {
    width: 25%;
}

.w-9\/12 {
    width: 75%;
}

.w-4 {
    width: 1rem;
}

.w-16 {
    width: 4rem;
}

.max-w-full {
    max-width: 100%;
}

.flex-1 {
    flex: 1 1 0%;
}

.flex-grow {
    flex-grow: 1;
}

.appearance-none {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.flex-row {
    flex-direction: row;
}

.flex-col {
    flex-direction: column;
}

.flex-wrap {
    flex-wrap: wrap;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.justify-items-center {
    justify-items: center;
}

.gap-2 {
    gap: 0.5rem;
}

.space-x-1> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.25rem * var(--tw-space-x-reverse));
    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-2> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-2> :not([hidden])~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-6> :not([hidden])~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-y-4> :not([hidden])~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-x-3> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-3> :not([hidden])~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.overflow-hidden {
    overflow: hidden;
}

.rounded {
    border-radius: 0.25rem;
}

.rounded-xl {
    border-radius: 0.75rem;
}

.rounded-md {
    border-radius: 0.375rem;
}

.rounded-full {
    border-radius: 9999px;
}

.border {
    border-width: 1px;
}

.border-2 {
    border-width: 2px;
}

.border-b-2 {
    border-bottom-width: 2px;
}

.border-b {
    border-bottom-width: 1px;
}

.border-current {
    border-color: currentColor;
}

.border-gray-400 {
    --tw-border-opacity: 1;
    border-color: rgba(156, 163, 175, var(--tw-border-opacity));
}

.border-white {
    --tw-border-opacity: 1;
    border-color: rgba(255, 255, 255, var(--tw-border-opacity));
}

.border-primary-600 {
    --tw-border-opacity: 1;
    border-color: rgba(103, 76, 37, var(--tw-border-opacity));
}

.border-primary-500 {
    --tw-border-opacity: 1;
    border-color: rgba(124, 92, 44, var(--tw-border-opacity));
}

.border-primary-300 {
    --tw-border-opacity: 1;
    border-color: rgba(170, 145, 112, var(--tw-border-opacity));
}

.border-color3-500 {
    --tw-border-opacity: 1;
    border-color: rgba(208, 172, 149, var(--tw-border-opacity));
}

.border-opacity-50 {
    --tw-border-opacity: 0.5;
}

.bg-primary-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(124, 92, 44, var(--tw-bg-opacity));
}

.bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}

.bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}

.bg-primary-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(103, 76, 37, var(--tw-bg-opacity));
}

.bg-secondary-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(86, 49, 38, var(--tw-bg-opacity));
}

.bg-transparent {
    background-color: transparent;
}

.bg-opacity-90 {
    --tw-bg-opacity: 0.9;
}

.p-2 {
    padding: 0.5rem;
}

.p-4 {
    padding: 1rem;
}

.p-3 {
    padding: 0.75rem;
}

.p-6 {
    padding: 1.5rem;
}

.p-1 {
    padding: 0.25rem;
}

.p-7 {
    padding: 1.75rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-56 {
    padding-top: 14rem;
    padding-bottom: 14rem;
}

.py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
}

.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.px-0 {
    padding-left: 0px;
    padding-right: 0px;
}

.py-48 {
    padding-top: 12rem;
    padding-bottom: 12rem;
}

.py-36 {
    padding-top: 9rem;
    padding-bottom: 9rem;
}

.py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.pb-4 {
    padding-bottom: 1rem;
}

.pt-12 {
    padding-top: 3rem;
}

.pb-6 {
    padding-bottom: 1.5rem;
}

.pt-2 {
    padding-top: 0.5rem;
}

.pl-3 {
    padding-left: 0.75rem;
}

.pb-72 {
    padding-bottom: 18rem;
}

.pt-48 {
    padding-top: 12rem;
}

.pb-2 {
    padding-bottom: 0.5rem;
}

.pt-4 {
    padding-top: 1rem;
}

.pb-48 {
    padding-bottom: 12rem;
}

.pt-36 {
    padding-top: 9rem;
}

.pb-12 {
    padding-bottom: 3rem;
}

.pt-7 {
    padding-top: 1.75rem;
}

.pl-2 {
    padding-left: 0.5rem;
}

.pr-4 {
    padding-right: 1rem;
}

.pl-4 {
    padding-left: 1rem;
}

.pr-6 {
    padding-right: 1.5rem;
}

.pr-2 {
    padding-right: 0.5rem;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.font-serif {
    font-family: 'Oswald', sans-serif;
}

.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.text-5xl {
    font-size: 3rem;
    line-height: 1;
}

.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
}

.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
}

.font-bold {
    font-weight: 700;
}

.font-normal {
    font-weight: 400;
}

.font-medium {
    font-weight: 500;
}

.font-light {
    font-weight: 300;
}

.font-semibold {
    font-weight: 600;
}

.uppercase {
    text-transform: uppercase;
}

.capitalize {
    text-transform: capitalize;
}

.leading-none {
    line-height: 1;
}

.leading-tight {
    line-height: 1.25;
}

.text-gray-500 {
    --tw-text-opacity: 1;
    color: rgba(107, 114, 128, var(--tw-text-opacity));
}

.text-black {
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
}

.text-primary-500 {
    --tw-text-opacity: 1;
    color: rgba(124, 92, 44, var(--tw-text-opacity));
}

.text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.text-gray-900 {
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
}

.text-gray-800 {
    --tw-text-opacity: 1;
    color: rgba(31, 41, 55, var(--tw-text-opacity));
}

.text-gray-300 {
    --tw-text-opacity: 1;
    color: rgba(209, 213, 219, var(--tw-text-opacity));
}

.text-gray-600 {
    --tw-text-opacity: 1;
    color: rgba(75, 85, 99, var(--tw-text-opacity));
}

.text-gray-400 {
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
}

.text-color3-500 {
    --tw-text-opacity: 1;
    color: rgba(208, 172, 149, var(--tw-text-opacity));
}

.opacity-25 {
    opacity: 0.25;
}

.outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
}


h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Oswald', sans-serif;
}

.poster {
    z-index: 0;
}

.poster:before {
    background-image: url(https://images.unsplash.com/photo-1597143722151-6c041d7b2901?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE5MXx8Y2xpbmljfGVufDB8fHx8MTYzNDA4NzkzNQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max) !important;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
}

body.poster:before {
    position: fixed;
}

@media (min-width: 1440px),
(min-width: 992px) and (-webkit-min-device-pixel-ratio: 2),
(min-width: 992px) and (min-resolution: 192dpi) {
    .poster:before {
        background-image: url(https://images.unsplash.com/photo-1597143722151-6c041d7b2901?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE5MXx8Y2xpbmljfGVufDB8fHx8MTYzNDA4NzkzNQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max) !important;
    }
}

body,
html {
    min-height: 100vh;
}

.hover\:bg-primary-500:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(124, 92, 44, var(--tw-bg-opacity));
}

.hover\:bg-primary-600:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(103, 76, 37, var(--tw-bg-opacity));
}

.hover\:bg-gray-200:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}

.hover\:bg-primary-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(82, 61, 30, var(--tw-bg-opacity));
}

.hover\:bg-gray-800:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

.hover\:bg-white:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.hover\:bg-gray-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}

.hover\:bg-current:hover {
    background-color: currentColor;
}

.hover\:bg-gray-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

.hover\:bg-primary-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(235, 231, 223, var(--tw-bg-opacity));
}

.hover\:bg-secondary-600:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(71, 41, 32, var(--tw-bg-opacity));
}

.hover\:text-primary-600:hover {
    --tw-text-opacity: 1;
    color: rgba(103, 76, 37, var(--tw-text-opacity));
}

.hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.hover\:text-gray-400:hover {
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
}

.hover\:text-gray-300:hover {
    --tw-text-opacity: 1;
    color: rgba(209, 213, 219, var(--tw-text-opacity));
}

.hover\:text-primary-300:hover {
    --tw-text-opacity: 1;
    color: rgba(170, 145, 112, var(--tw-text-opacity));
}

.hover\:text-secondary-500:hover {
    --tw-text-opacity: 1;
    color: rgba(86, 49, 38, var(--tw-text-opacity));
}

.hover\:text-gray-200:hover {
    --tw-text-opacity: 1;
    color: rgba(229, 231, 235, var(--tw-text-opacity));
}

.hover\:text-primary-700:hover {
    --tw-text-opacity: 1;
    color: rgba(82, 61, 30, var(--tw-text-opacity));
}

.hover\:text-primary-400:hover {
    --tw-text-opacity: 1;
    color: rgba(147, 118, 77, var(--tw-text-opacity));
}

.hover\:text-blue-800:hover {
    --tw-text-opacity: 1;
    color: rgba(30, 64, 175, var(--tw-text-opacity));
}

.hover\:text-blue-600:hover {
    --tw-text-opacity: 1;
    color: rgba(37, 99, 235, var(--tw-text-opacity));
}

.hover\:text-primary-500:hover {
    --tw-text-opacity: 1;
    color: rgba(124, 92, 44, var(--tw-text-opacity));
}

.hover\:text-gray-900:hover {
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
}

.hover\:text-color3-700:hover {
    --tw-text-opacity: 1;
    color: rgba(137, 114, 98, var(--tw-text-opacity));
}

.hover\:text-opacity-75:hover {
    --tw-text-opacity: 0.75;
}

.hover\:underline:hover {
    text-decoration: underline;
}

.hover\:opacity-75:hover {
    opacity: 0.75;
}

.group:hover .group-hover\:bg-primary-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(103, 76, 37, var(--tw-bg-opacity));
}

.group:hover .group-hover\:opacity-90 {
    opacity: 0.9;
}

@media (min-width: 640px) {

    .sm\:w-4\/12 {
        width: 33.333333%;
    }

    .sm\:w-6\/12 {
        width: 50%;
    }

    .sm\:w-auto {
        width: auto;
    }

    .sm\:w-10\/12 {
        width: 83.333333%;
    }

    .sm\:w-8\/12 {
        width: 66.666667%;
    }

    .sm\:flex-1 {
        flex: 1 1 0%;
    }

    .sm\:flex-initial {
        flex: 0 1 auto;
    }

    .sm\:pr-12 {
        padding-right: 3rem;
    }

    .sm\:pr-48 {
        padding-right: 12rem;
    }

    .sm\:pr-36 {
        padding-right: 9rem;
    }
}

@media (min-width: 768px) {

    .md\:w-9\/12 {
        width: 75%;
    }

    .md\:w-10\/12 {
        width: 83.333333%;
    }

    .md\:w-6\/12 {
        width: 50%;
    }

    .md\:w-auto {
        width: auto;
    }

    .md\:w-full {
        width: 100%;
    }

    .md\:w-4\/12 {
        width: 33.333333%;
    }

    .md\:flex-1 {
        flex: 1 1 0%;
    }

    .md\:space-x-4> :not([hidden])~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
        margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }

    .md\:text-5xl {
        font-size: 3rem;
        line-height: 1;
    }

    .md\:leading-tight {
        line-height: 1.25;
    }
}

@media (min-width: 1024px) {

    .lg\:order-2 {
        order: 2;
    }

    .lg\:order-1 {
        order: 1;
    }

    .lg\:order-last {
        order: 9999;
    }

    .lg\:mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .lg\:mr-2 {
        margin-right: 0.5rem;
    }

    .lg\:block {
        display: block;
    }

    .lg\:flex {
        display: flex;
    }

    .lg\:hidden {
        display: none;
    }

    .lg\:w-auto {
        width: auto;
    }

    .lg\:w-8\/12 {
        width: 66.666667%;
    }

    .lg\:w-11\/12 {
        width: 91.666667%;
    }

    .lg\:w-7\/12 {
        width: 58.333333%;
    }

    .lg\:w-6\/12 {
        width: 50%;
    }

    .lg\:w-5\/12 {
        width: 41.666667%;
    }

    .lg\:w-4\/12 {
        width: 33.333333%;
    }

    .lg\:w-9\/12 {
        width: 75%;
    }

    .lg\:flex-row {
        flex-direction: row;
    }

    .lg\:items-center {
        align-items: center;
    }

    .lg\:space-x-4> :not([hidden])~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
        margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }

    .lg\:space-y-0> :not([hidden])~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0px * var(--tw-space-y-reverse));
    }

    .lg\:p-4 {
        padding: 1rem;
    }

    .lg\:p-6 {
        padding: 1.5rem;
    }

    .lg\:px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .lg\:pt-6 {
        padding-top: 1.5rem;
    }

    .lg\:text-5xl {
        font-size: 3rem;
        line-height: 1;
    }

    .lg\:text-6xl {
        font-size: 3.75rem;
        line-height: 1;
    }

    .lg\:leading-tight {
        line-height: 1.25;
    }
}

</style>

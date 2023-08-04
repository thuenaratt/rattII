<template>
    <defaultLayout>


        <body class="text-gray-500">
            <main>
                <section class="relative text-gray-300 bg-secondary-500 poster ">
                    <div class="container relative pt-4 mx-auto">
                        <nav class="flex flex-wrap items-center px-4 py-2">
                            <a href="#"
                                class="inline-flex mr-4 font-serif text-2xl font-bold leading-none text-black uppercase hover:text-gray-300">
                                N & R Beauty </a>
                            <div class="px-2 ml-auto lg:order-2">
                                <div class="flex flex-row ml-auto">
                                    <a href="#" class="px-2 py-4 text-black hover:text-gray-300" aria-label="Search"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            width="1.25em" height="1.25em" class="inline-block">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                                                </path>
                                            </g>
                                        </svg></a>
                                    <a href="#" class="px-2 py-4 text-black hover:text-gray-300" aria-label="View cart"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            width="1.25em" height="1.25em" class="inline-block">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z">
                                                </path>
                                            </g>
                                        </svg><span>(0)</span></a>
                                    <a href="#" class="px-2 py-4 text-black hover:text-gray-300" aria-label="Account"><svg
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
                                        <a href="#" class="py-2 text-black hover:text-gray-300 lg:p-4">Home</a>
                                    </router-link>
                                    <router-link to="shop">
                                        <a href="#" class="py-2 text-black hover:text-gray-300 lg:p-4">Shop</a>
                                    </router-link>

                                    <router-link to="about">
                                        <a href="#" class="py-2 text-black hover:text-gray-300 lg:p-4">About</a>
                                    </router-link>
                                    <router-link to="page">
                                        <a href="#" class="py-2 text-black hover:text-gray-300 lg:p-4">Page</a>
                                    </router-link>

                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="container px-4 mx-auto py-36">
                        <div class="flex flex-wrap items-center -mx-4 space-y-6 lg:space-y-0">
                            <div class="w-full px-4 md:w-10/12 lg:w-6/12 xl:w-5/12">
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
            </main>
        </body>
        <section class="py-10 bg-gray-100">
            <link href="Content/css/popupf7d5.css?v=20230421001" rel="stylesheet" type="text/css" />
            <div class="grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <article v-for="product in products" :key="product._id"
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <!-- <div>{{ product.imageUrl }}</div> -->

                        <!-- <div>{{ product.title}}</div> -->
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://cimgr.thebeaulife.co/cimg/f_jpg,w_450,c_fit/img/innisfree_Green_Tea_Line_New_Formula_Singapore_(4).jpg"
                                alt="">
                            <img :src="product.imageUrl" alt="Hotel Photo" />
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">Innisfree Green Tea Hydrating Amino Acid Cleansing Line.</h2>
                            <!-- <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p> -->

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#df4c4c]">$10</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://cimgr.thebeaulife.co/cimg/f_jpg,w_450,c_fit/img/innisfree_Green_Tea_Line_New_Formula_Singapore_(4).jpg"
                                alt="Hotel Photo" />
                            <div
                                class="absolute inline-flex items-center p-2 bg-white rounded-lg shadow-md bottom-3 left-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="ml-1 text-sm text-slate-400">4.9</span>
                            </div>
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">innisfree Green Tea Seed Line.</h2>
                            <!-- <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p> -->

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#e65c5c]">$9</p>
                            </div>
                        </div>

                    </a>
                </article>

                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.adorebeauty.com.au/media/catalog/product/1/3/131171094_bija_trouble_skin.png?w=600&h=600&fmt=webp"
                                alt="Hotel Photo" />
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">The Hilton Hotel</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#d25a5a]">$8</p>
                            </div>
                        </div>
                    </a>
                </article>

                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://img.shoplineapp.com/media/image_clips/62f3d6796d36e800225a44c4/original.jpeg?1660147320"
                                alt="Hotel Photo" />
                            <div
                                class="flex items-center space-x-1.5 rounded-lg bg-[#da5252] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <button class="text-sm">Add to cart</button>
                            </div>
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">The Hilton Hotel</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#b64648]">$4</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src=" "
                                alt="Hotel Photo" />
                            <div
                                class="flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <button class="text-sm">Add to cart</button>
                            </div>
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">The Hilton Hotel</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#bb4040]">$11</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://cf.shopee.co.th/file/f8962733eb524a6b6e7d4e47c0357c13" alt="Hotel Photo" />
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">The Hilton Hotel</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#c34444]">$13</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://i.ebayimg.com/images/g/nxcAAOSwl2RkRrWg/s-l1200.jpg" alt="Hotel Photo" />
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <button class="p-2 text-white bg-green-500 rounded-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">The Hilton Hotel</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#b64040]">$12</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article
                    class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <a href="#">
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/339742/minimalist-spf-50-sunscreen-with-niacinamide-vitamin-b5-vitamin-f-broad-spectrum-pa-for-all-skin-types-50g-pack-of-2_2_display_1679316919_fd4f2a8b.jpg"
                                alt="Hotel Photo" />
                            <div
                                class="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                <!-- Overlay Content -->
                                <div class="text-center text-white">
                                    <div class="mb-4">
                                        <!-- View Details Icon -->
                                        <button class="p-2 mr-4 text-white bg-blue-500 rounded-full ">
                                            <i class="fas fa-eye">

                                            </i>
                                        </button>
                                        <!-- Add to Cart Icon -->
                                        <RouterLink to="/cart"><button class="p-2 text-white bg-green-500 rounded-full">Add
                                                to Cart</button>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 mt-1">
                            <h2 class="text-slate-700">The Hilton Hotel</h2>
                            <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                            <div class="flex items-end justify-between mt-3">
                                <p class="text-lg font-bold text-[#dc4242]">$11.5</p>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </section>

        <Footers />
    </defaultLayout>
</template>
<script>
// import defaultLayout from '../layout/default.layout.vue';
// import { RouterLink } from 'vue-router';
// import { Swiper, SwiperSlide } from 'swiper/vue';

import category from "../libs/apis/category";
import item from "../libs/apis/item";
import product from "../libs/apis/product";
import Footers from "@/component/Footers.vue";


export default {

    components: { Footers },
    data() {
        return {
            categories: [],
            items: [],
            products: [],
            title: "",
            imageUrl: "",
            desc: "",
            categoryId: "",
            itemId: "",
            priceModalShown: false,
            selectedProduct: null,
            price: "",
            source: "",

        }
    },
    async mounted() {
        this.categories = await category.all();
        this.items = await item.all();
        this.products = await product.all();
        console.log(this.products)
        console.log(this.categories.data);

    },

    methods: {
        async onClick(categoryId, itemId) {
            this.products = await product.all(categoryId, itemId)
        },


    },

};
</script>

<default></default>
<style>
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

h6 {
    font-size: inherit;
    font-weight: inherit;
}

a {
    color: inherit;
    text-decoration: inherit;
}

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
        background-image: url(https://wholesale.stylekorean.com/Content/img/new/AllAbout_PC_mainbanner.jpg?v=2022061714) !important;
    }
}

body,
html {
    min-height: 100vh;
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
}</style>


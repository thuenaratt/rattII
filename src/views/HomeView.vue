

<template>
  <defaultLayout>
    <body class="bg-[83adb1]">
      <div class="sticky top-0 flex justify-between h-20 bg-white shadow-lg header z-[1]">
        <a href="#"
        class="inline-flex px-10 py-4 mr-4 font-serif text-2xl font-bold leading-none text-black case text- hover:text-black"> N & R Beauty </a>
        <div class="flex items-center justify-between w-1/4 text-2xl header-middle ">
          <router-link to="/">
            <a href="#" class="px-4 py-2 mb-4 font-bold rounded hover:text-blue-100">Home</a>
          </router-link>
          <router-link to="shop">
            <a href="#" class="px-4 py-2 mb-4 font-bold text-black rounded hover:text-blue-100">Shop</a>
          </router-link>

          <router-link to="/about">
            <a href="#" class="px-4 py-2 mb-4 font-bold text-black rounded hover:text-blue-100">About</a>
          </router-link>
          <router-link to="about">
             <a href="#" class="px-4 py-2 mb-4 font-bold text-black rounded hover:text-blue-100">Page</a>
          </router-link>
         
        </div>
        
         <div class="">
        
                <ul class="nav ">
                  <RouterLink to="/signup">
                    <li class="nav-item" style="line-height:30px;"><a class="text-black nav-link" href=""
                        id="registerLink">Register</a></li>
                  </RouterLink>
                  <router-link to="/login">
                    <li class="nav-item" style="line-height:30px;"><a class="text-black nav-link" href="" id="loginLink">Log In</a></li>
                  </router-link>
                  </ul>
         </div>
        <div class="action flex  justify-between h-full w-[13%] items-center">

          <div class="flex">
            <router-link to="cart">
              <img class="h-10" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="">
              <h1 class="text-3xl text-right">cart</h1>
            </router-link>

          </div>
        </div>
      </div>
      <div></div>
      <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <div>
          <img src="https://d3i908zd4kzakt.cloudfront.net/data/banner/event_banner_2810_1690784375.jpg" alt="slide1">
        </div>
        <!-- <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> -->
      </swiper>
      <section class="py-10 bg-gray-100">

        <div class="w-full max-w-screen-lg py-8 mx-auto">
          <h2 class="py-10 text-lg text-bold" style="text-align:center; text-transform:uppercase;">Brands</h2>
          <img src=""
            class="d-block w-100 visible-lg visible-md visible-sm" style="" alt="..." usemap="#brands_logo">
          <div class="flex flex-col items-center py-10 md:text-center">
            <button class="px-4 py-2 text-lg font-semibold border-b-4 border-gray-300 md:mr-4 focus:outline-none"
              data-target="tab1"> Bestseller </button>
            <button class="flex-col px-4 py-2 font-semibold border-b-4 border-transparent md:mr-4 focus:outline-none"
              data-target="tab2"> New Arrivals
            </button>
            
            <!-- Add more tab titles if needed -->
          </div>
        </div>
        <link href="Content/css/popupf7d5.css?v=20230421001" rel="stylesheet" type="text/css" />
        <div class="grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <article v-for="product in products" :key="product._id"
            class="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
            <a href="#">
              <!-- <div>{{ product.imageUrl }}</div> -->

              <!-- <div>{{ product.title}}</div> -->
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  :src="product.imageUrl"
                  alt=""
                  onerror="this.onerror=null; this.src='/PlaceholderImg.png'">
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
                      <button class="p-2 text-white bg-green-500 rounded-full" @click="saveToLocal(product)" >Add to Cart</button>
                     
                    </div>
                  </div>
                </div>
              </div>


              <div class="p-2 mt-1">
                <h2 class="text-slate-700">{{product.title}}</h2>
                <!-- <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p> -->

                <div class="flex items-end justify-between mt-3">
                  <p class="text-lg font-bold text-[#826B9F]">${{product?.prices[0]?.price || 0}}</p>

                  <!-- <div
                    class="flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <button class="text-sm">Add to cart</button>

                  </div> -->

                </div>
              </div>
            </a>
          </article>
     
        </div>
      </section>



    </body>
    <Footers />
  </defaultLayout>
</template>

<script >
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
      Cartdata:localStorage.getItem('CartData')?JSON.parse(localStorage.getItem('CartData')):[]
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
    saveToLocal(data){
      this.Cartdata.push({
        id:data._id,
        name:data.title,
        qty:1,
        image:data.imageUrl,
        price:data?.prices[0]?.price || 0
         
      })
      // console.log(data)
      localStorage.setItem("CartData",JSON.stringify(this.Cartdata))
      this.$router.push("/cart");
    }

  },

};



</script>
<style  scoped lang="scss">
.productlistHeader {
  width: 100%;
  display: flex;

  &>div {
    width: 100%;
  }
}

.swiper-container {
  width: 100%;
  height: 500px;
  margin: 0 auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.product-tabs-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.active-tab {
  border-color: #0d0d0d;
}
</style>


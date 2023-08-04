

<template>
  <defaultLayout>

    <div class="bg-[#ffd8d8] h-14 flex items-center pl-8 my-6">
      <h1 class="text-xl">HOME</h1>
    </div>
    <div class=" h-40 bg-[#83adb1] mt-12 flex">
      <div class="flex flex-col items-center w-1/3 pt-4 left">
        <h1 class="mb-4 text-4xl ">Beauty Refresh</h1>
        <div class="px-4 bg-white w-fit">
          <h1 class="text-[#83adb1] text-6xl">SALE</h1>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center middle">
        <h1 class="text-4xl text-white ">UP TO 20% OFF <span class="font-bold">SKIN CARE</span></h1>
        <p>Cleansers, moisturizers, eye creams & more: </p>
        <p>your spring skin care routine is waiting.</p>
        <p class="font-bold">Code: REFRESH</p>
      </div>
      <div class="flex items-center justify-center w-1/4 left">
        <button class="p-2 text-xl text-white bg-black hover:bg-white hover:text-black">
          <RouterLink to="/cart">SHOP NOW</RouterLink>
        </button>
      </div>
    </div>
    <div class="productlistHeader ">
      <div class="left "></div>
      <div class="right">
        <div class="Header_wrapper">
          <h2 id="product-title">Skin Care</h2>
          <p id="product-results">3003 results</p>

        </div>
        <div class="readmore">
          <div class="readmore_content">
            "Shop professional-strength, dermatologist recommended skin care products from top skin care brands including
            SkinCeuticals,
            SkinMedica, EltaMD, Obagi and more. Choose from a variety of cleansers, toners and exfoliators to help clear
            your skin of dirt, oil and impurities.
            Shop skin care with SPF and help protect your skin from harmful UV rays and reduce signs of aging.Find skin
            care products with your favorite ingredients such as vitamin c,
            hyaluronic acid, retinol and take on any skin care concerns. Weather you have dry, oily or combination skin,
            you'll be able to find skin care products that best fit your skin type and concerns. "
          </div>

        </div>
      </div>
    </div>

    <!-- <div class="justify-center text-center right item-center">
      <h2 id="text-center">Skin Care</h2>
      <p id="product-results">3003 results</p>
      
    </div> -->

    <div class="container px-4 py-8 mx-auto">
      <div class="">Refine</div>
      <div class="border-t border-gray-600"></div>
      <h2 class="mb-4 text-2xl font-semibold">Skincare Format</h2>
      <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <li class="h-64 overflow-y-scroll">
          <a href="#" class="block p-4 rounded-lg "> Foam (150)</a>
          <a href="#" class="block p-4 rounded-lg "> Oil (160)</a>
          <a href="#" class="block p-4 rounded-lg ">Serum (290)</a>
          <a href="#" class="block p-4 rounded-lg ">Cream (110)</a>
          <a href="#" class="block p-4 rounded-lg "> Essence (45)</a>
        </li>
      </ul>

      <h2 class="mt-8 mb-4 text-2xl font-semibold">Skincare Day Night</h2>
      <div class="border-t border-gray-600"></div>
      <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <li class="h-64 overflow-y-scroll">
          <a href="#" class="block p-4 rounded-lg "> Any (1733)</a>
          <a href="#" class="block p-4 rounded-lg "> Day (1172)</a>
          <a href="#" class="block p-4 rounded-lg "> Night (1025)</a>
        </li>
      </ul>
    </div>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

  </defaultLayout>
</template>
  
<script setup>
import defaultLayout from '../layout/default.layout.vue';

  // var swiper = new Swiper('.swiper-container', {
  //   loop: true, // Enable continuous loop
  //   autoplay: {
  //     delay: 5000, // Change slide every 5 seconds
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  // });
</script>
  
    <!-- <script>
      // Initialize Swiper
      var swiper = new Swiper('.swiper-container', {
        loop: true, // Enable continuous loop
        autoplay: {
          delay: 5000, // Change slide every 5 seconds
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    </script> -->
  
<style scoped lang="scss">
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

/* Customize the appearance of swiper slides */
.swiper-slide {
  background-size: cover;
  background-position: center;
}
</style>
  
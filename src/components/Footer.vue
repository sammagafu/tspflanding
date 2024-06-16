<template>
  <div class="container lg:mx-auto px-4">
    <p class="text-4xl font-bold text-black">
      2024 Sponsors
    </p>
    
    <div class="py-6">
      <p class="text-2xl font-bold text-black">
        Platinum Sponsors
      </p>
    </div>

    <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-rows gap-4">
      <img src="@/assets/img/sponsors/hmh.png" alt="hmh">
      <img src="@/assets/img/sponsors/tma.png" alt="tma">
      <img src="@/assets/img/sponsors/amsons.png" alt="camel oil">

      <!-- <img src="@/assets/img/sponsors/norway.png" alt="norway">
      <img src="@/assets/img/sponsors/ireland.png" alt="irealand">
      <img src="@/assets/img/sponsors/fcdo.png" alt="fcdo"> -->
    </div>
  </div>

  <div class="container lg:mx-auto px-4">
    <div class="py-2">
      <p class="text-2xl font-bold text-black">
        Gold Sponsors
      </p>

    <div class="grid grid-cols-4 lg:grid-cols-4 grid-flow-rows gap-4">
      <img src="@/assets/img/sponsors/africab.png" alt="hmh">
    </div>
    </div>
  </div>

  <div class="container lg:mx-auto px-4">

    <p class="text-2xl font-bold text-black">
      Silver Sponsors
    </p>

    <div class="grid grid-cols-4 lg:grid-cols-4 grid-flow-rows gap-4">
      <!-- <img src="@/assets/img/sponsors/elswedy.png" alt="hmh"> -->
      <img src="@/assets/img/sponsors/ttc.png" alt="camel oil">
    </div>
    </div>

  <div class="container lg:mx-auto px-4">
    <p class="text-2xl font-bold text-black">
      Bronze Sponsors
    </p>

    <div class="grid grid-cols-6 lg:grid-cols-4 grid-flow-rows gap-4">
      <img src="@/assets/img/sponsors/nbc.png" alt="hmh">
      <img src="@/assets/img/sponsors/pepsi.png" alt="hmh">
      <img src="@/assets/img/sponsors/advent.png" alt="fcdo">

      <!-- <img src="@/assets/img/sponsors/nmb.png" alt="camel oil">
      <img src="@/assets/img/sponsors/pepsi.png" alt="norway">
      <img src="@/assets/img/sponsors/tdv.png" alt="irealand">
      -->
    </div>
    </div>

  <footer class="bg-white shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Tanzania Private Sector
        Foundation. All Rights Reserved.</span>
    </div>
  </footer>


</template>

<script setup>
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Autoplay,
    Pagination,
    Navigation
  } from 'swiper/modules';

  import 'swiper/css/navigation';
  import 'swiper/css';

  const onSwiper = (swiper) => {
    console.log(swiper);
  };

  const onSlideChange = () => {
    console.log('slide change');
  };

  const modules = [Navigation, Autoplay];
</script>

<style scoped>
  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
</style>

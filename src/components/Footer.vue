<template>
<div class="container mx-auto">
    <p class="text-center text-4xl font-medium">
        Meet our sponsors
    </p>
</div>

<div class="container mx-auto py-12">
    <swiper
    :slides-per-view="6"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="@/assets/img/sponsors/elswedy.png" alt="Elsewedy"></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/nbc.png" alt="NBC Bank"></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/nmb.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/ttc.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/hmh.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/carmel.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/elswedy.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/elswedy.png" alt=""></swiper-slide>


  </swiper>
</div>

<footer class="bg-white shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Tanzania Private Sector Foundation. All Rights Reserved.</span>
    </div>
</footer>


</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>
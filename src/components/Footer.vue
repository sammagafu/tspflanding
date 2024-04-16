<template>
<div class="container mx-auto pt-16">
    <p class="text-center text-4xl font-bold text-black">
        2024 Sponsors
    </p>
</div>




<div class="container mx-auto">
  <div class="py-6">
  <p class="text-2xl font-bold text-black">
    Platinum Sponsors
  </p>

    <swiper
    :slides-per-view="8"
    :space-between="50"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
  >
    <swiper-slide><img src="@/assets/img/sponsors/hmh.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/carmel.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/tma.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/norway.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/ireland.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/fcdo.png" alt=""></swiper-slide>


  </swiper>
</div>

  <p class="text-4xl font-bold text-black">
    Silver Sponsors
    </p>

    <swiper
    :slides-per-view="8"
    :space-between="50"
    :modules="modules"
    :centeredSlides="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 8,
        spaceBetween: 50,
      },
    }"
  >
  <swiper-slide><img src="@/assets/img/sponsors/elswedy.png" alt="Elsewedy"></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/ttc.png" alt=""></swiper-slide>


  </swiper>
</div>


<div class="container mx-auto">
  <p class="text-4xl font-bold text-black">
    Bronze Sponsors
    </p>

    <swiper
    :slides-per-view="8"
    :centeredSlides="true"
    :modules="modules"
    :space-between="50"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 8,
        spaceBetween: 50,
      },
    }"
  >
  <swiper-slide><img src="@/assets/img/sponsors/nbc.png" alt="Elsewedy"></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/nmb.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/pepsi.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/img/sponsors/tdv.png" alt=""></swiper-slide>


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
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  import 'swiper/css/navigation';
  import 'swiper/css';

  const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const modules = [Navigation,Autoplay];
</script>
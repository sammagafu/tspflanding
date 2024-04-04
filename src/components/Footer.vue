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

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
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
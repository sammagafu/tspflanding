<script setup>
import sliderImg from "@/assets/img/background/header.jpg";
import VueCountdown from "@chenfengyuan/vue-countdown";
import {
  Swiper,
  SwiperSlide
} from 'swiper/vue';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { ref, computed } from "vue";
const modules = [Navigation,Autoplay];
const now = new Date();
const april24th = ref(new Date(now.getFullYear(), 6, 23)); // Month in JavaScript Date starts from 0 (0-January, 1-February, ...)

if (now > april24th.value) { // If April 24th has already passed this year, calculate for next year
  april24th.value.setFullYear(april24th.value.getFullYear() + 1);
}

const timeRemaining = computed(() => april24th.value - now);


</script>

<template>
  <section id="home" class="py-8 lg:py-36 relative overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover"
    :style="'background-image: url(' + sliderImg + ');'">
    <div class="absolute bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900 inset-0 w-full h-full"></div>
    <!-- <div class="absolute inset-0 bg-black/30"></div> -->
    <!-- end backdrop -->

    <div class="container mx-auto">
      <div class="relative text-center mx-4">
        <span class="text-white font-medium bg-blue-800 py-[5px] px-4 rounded-md">
          23 <sup>rd</sup> July 2024
        </span>
        <h1 class="lg:text-6xl text-xl font-extrabold text-white my-4">
          25<sup>th</sup> Anniversary of TPSF <br />A legacy of championing private sector Growth Towards Vision 2050
        </h1>
        <div class="flex justify-center">
          <div class="max-w-3xl text-center">
            <p class="text-white">
              TPSW 2024 encapsulates the enduring commitment of TPSF and the wider private
              sector to steer economic development through innovation, entrepreneurship,
              and sustainable practices. The theme echoes the narrative of resilience,
              adaptation, and progress that defines the Tanzanian private sector's
              evolution
            </p>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="relative mt-6">
            <!-- Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown> -->

            <div class="">
              <vue-countdown :time="timeRemaining" v-slot="{ days, hours, minutes, seconds }">
                <div class="flex flex-wrap items-center justify-center gap-y-4 gap-x-4 sm:gap-x-0">
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span id="days" class="text-4xl text-bold">{{ days }}</span>
                    <span class="text-baseline text-bold">Days</span>
                  </div>
                  <div class="text-2xl font-bold mx-4 text-white hidden sm:block">:</div>
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span id="hours" class="text-4xl text-bold">{{ hours }}</span>
                    <span class="text-baseline text-bold">Hours</span>
                  </div>
                  <div class="text-2xl font-bold mx-4 text-white hidden sm:block">:</div>
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span id="minutes" class="text-4xl text-bold">{{ minutes }}</span>
                    <span class="text-baseline text-bold">Minutes</span>
                  </div>
                  <div class="text-2xl font-bold mx-4 text-white hidden sm:block">:</div>
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                    <span id="seconds" class="text-4xl text-boldl">{{ seconds }}</span>
                    <span class="text-baseline text-bold">Seconds</span>
                  </div>
                </div>
              </vue-countdown>
            </div>
          </div>
        </div>
        <!-- Flex End -->
      </div>
      <div class="container mx-auto mt-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:justify-center">
          <div class="relative">
            <a href="https://patten.co.tz/app/events/U2FsdGVkX18m4pQJ0Rbtp9GYRFOpNb795iBxePIF2ec%3D/registrations/attendees?extension=#101e51&access=660e636cec00625"
              class="text-xl font-medium py-3 px-9 bg-white text-primary rounded-lg transition-all duration-500 hover:shadow-white/10">Register for free</a>
          </div>
          <div class="relative sm:pt-4">
            <a href="https://patten.co.tz/app/events/U2FsdGVkX19DcbWLMyY1cMWhzMj6d89UT%2BOUWp6AqRE%3D/registrations/attendees?extension=#101e51&access=660e636cec00625"
              class="text-xl font-medium py-3 px-9 bg-blue-700 text-white rounded-lg transition-all duration-500 hover:shadow-blue-800/10">Exhibit with us</a>
          </div>
        </div>
      </div>
      <!-- Flex End -->
    </div>
    <!-- Container End -->
  </section>

  <div class="gray bg-blue-200 mx-2 my-4 lg:container lg:mx-auto">
    <section id="about" class="">
      <div class="mx-2">
        <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
          <div>
            <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :modules="modules">
              <swiper-slide><img src=@/assets/img/homepage/chairman.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
              <swiper-slide><img src=@/assets/img/homepage/chairman-1.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
              <swiper-slide><img src=@/assets/img/homepage/chairman-2.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
              <swiper-slide><img src=@/assets/img/homepage/chairman-3.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
              <swiper-slide><img src=@/assets/img/homepage/chairman-4.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
              <swiper-slide><img src=@/assets/img/homepage/chairman-5.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
              <swiper-slide><img src=@/assets/img/homepage/chairman-6.jpg alt="Chairperson" class="max-w-full max-h-full h-auto bg-cover rounded-lg"></swiper-slide>
            </swiper>

          </div>
          <!-- end grid-col -->

          <div class="my-6">
            <div class="mx-6">
              <h2 class="text-2xl text-gray-800 font-bold mb-4">
                Welcome to <br />
                <span class="text-blue-800">Tanzania Private Sector <br>Foundation.</span>
              </h2>
              <div class="flex flex-col my-4">
                <p class="font-medium text-baseline text-slate-900 text-justify">
                  Established in 1998 with just 33 members, TPSF has grown exponentially to
                  become the umbrella organization for over 400 direct members, including
                  Business Management Organizations and private corporations. Our members
                  collectively serve over 6 million businesses across Tanzania and Zanzibar.
                </p>
                <p class="font-medium text-baseline text-slate-900 text-justify pt-4">
                  TPSF serves as the Government's strategic partner and the foremost
                  advocate for the private sector. We are committed to representing a
                  unified voice, advising on policy formulation and reviews, and advocating
                  for an enabling business and investment climate.
                </p>
              </div>

              <a href="https://tpsftz.org/"
                class="group relative inline-block font-semibold tracking-wide text-base text-center border-none text-white hover:text-secondary duration-500 bg-blue-800 px-6 py-2"><span
                  class="absolute group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>Learn
                More <i class="uil uil-angle-right text-xl/none"></i></a>

              <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 my-12">
                <div class="">

                  <h6 class="text-l font-bold mb-1"> Date : 23<sup>rd</sup> July 2024<br>Program :
                    Conference</h6>
                  <p class="text-base font-bold mb-1">
                    Venue : (JNICC) Julius Nyerere International Convention Centre
                  </p>

                </div>

                <div class="">
                  <h6 class="text-l font-bold mb-1">Date : 23<sup>rd</sup>July 2024 <br>Program : Gala Dinner
                  </h6>
                  <p class="text-l font-bold mb-1">Venue : The Super Dome</p>
                </div>
              </div>
            </div>
          </div>
          <!-- end grid-col -->
        </div>
        <!-- Grid End -->
      </div>
      <!-- Container End -->
    </section>

    <div class="contact-section-one mb-4">
      <div class="container mx-4">
        <div class="grid grid-flow-row lg:grid-flow-col" style="visibility: visible; animation-name: fadeInRight;">
          <div class="address-block-three flex mb-4 lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10">
            <div class="icon w-[35px] mt-[7px]"><img class=" ml-auto" src="@/assets/img/icon/icon_161.svg" alt=""></div>
            <div class="text w-[calc(100%_-_35px)] pl-4">
              <h5 class="text-xl font-bold">For Sponsorship / Exhibition</h5>
              <p
                class=" text-[18px] leading-[1.65em] text-gray-600 mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">
                <a href="tel:+255759979657" class="text-l font-bold mb-1">+255
                  759 979 657</a>
              </p>
            </div>
          </div> <!-- /.address-block-three -->

          <div class="address-block-three flex mb-4 lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10 ">
            <div class="icon w-[35px] mt-[7px]"><img class=" ml-auto" src="@/assets/img/icon/icon_163.svg" alt=""></div>
            <div class="text w-[calc(100%_-_35px)] pl-4">
              <h5 class="text-xl font-bold">Messages
                and Call</h5>
              <p
                class=" text-[18px] leading-[1.65em] text-gray-600 mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">
                <a href="tel:+255752187582" class="text-l font-bold mb-1">+255
                  752 187 582</a>
              </p>
              <p
                class=" text-[18px] leading-[1.65em] text-gray-600 mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">
                <a href="tel:+255785274238" class="text-l font-bold mb-1">+255 785 274 238</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

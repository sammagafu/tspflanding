<script setup>
import sliderImg from "@/assets/img/background/header.jpg";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { ref, computed } from "vue";
const now = new Date();
const newYear = new Date(now.getFullYear() + 1, 0, 1);
const time = ref(newYear - now);
</script>

<template>
  <section
    id="home"
    class="py-64 relative overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover"
    :style="'background-image: url(' + sliderImg + ');'"
  >
    <div class="absolute bg-black/25 inset-0 w-full h-full"></div>
    <div class="absolute inset-0 bg-black/50"></div>
    <!-- end backdrop -->

    <div class="container mx-auto">
      <div class="relative text-center">
        <span class="text-white font-medium bg-white/20 py-[5px] px-4 rounded-md">
          21 <sup>th</sup> - 25 <sup>th</sup> April 2025
        </span>
        <h1 class="lg:text-6xl text-4xl font-extrabold text-blue-400 my-8">
          25th Anniversary of TPSF-Celebrating 25 Years of Pioneering Private Sector-led
          Growth.
        </h1>
        <div class="flex justify-center">
          <div class="max-w-3xl text-center">
            <p class="font-semibold text-white">
              TPSW 2024 encapsulates the enduring commitment of TPSF and the wider private
              sector to steer economic development through innovation, entrepreneurship,
              and sustainable practices. The theme echoes the narrative of resilience,
              adaptation, and progress that defines the Tanzanian private sector's
              evolution
            </p>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="relative mt-14">
            <!-- Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown> -->

            <div class="">
              <vue-countdown
                :time="17 * 24 * 60 * 60 * 1000"
                :transform="transformSlotProps"
                v-slot="{ days, hours, minutes, seconds }"
              >
                <div
                  class="flex flex-wrap items-center justify-center gap-y-4 gap-x-4 sm:gap-x-0"
                >
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2"
                  >
                    <span id="days" class="text-3xl"></span>
                    <span class="text-4xl text-bold">{{ days }}</span>
                  </div>
                  <div class="text-2xl font-bold mx-4 text-white hidden sm:block">:</div>
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2"
                  >
                    <span id="hours" class="text-3xl"></span>
                    <span class="text-4xl text-bold">{{ hours }}</span>
                  </div>
                  <div class="text-2xl font-bold mx-4 text-white hidden sm:block">:</div>
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2"
                  >
                    <span id="minutes" class="text-3xl"></span>
                    <span class="text-4xl text-bold">{{ minutes }}</span>
                  </div>
                  <div class="text-2xl font-bold mx-4 text-white hidden sm:block">:</div>
                  <div
                    class="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2"
                  >
                    <span id="seconds" class="text-3xl"></span>
                    <span class="text-4xl text-bold">{{ seconds }}</span>
                  </div>
                </div>
              </vue-countdown>
            </div>
          </div>
        </div>
        <!-- Flex End -->
      </div>

      <div class="flex justify-center">
        <div class="relative mt-20">
          <a
            href="#price"
            class="text-xl font-medium py-3 px-9 bg-white text-primary rounded-lg transition-all duration-500 hover:shadow-white/10"
            >Register Now</a
          >
        </div>
      </div>
      <!-- Flex End -->
    </div>
    <!-- Container End -->
  </section>

  <section id="about" class="sm:py-20 pt-20 pb-10 active">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
        <div>
          <img src=@/assets/img/homepage/chairman.jpg alt="Chairperson" class="max-w-full
          max-h-full h-auto">
        </div>
        <!-- end grid-col -->

        <div class="lg:me-6">
          <div class="my-auto">
            <h2 class="text-3xl text-gray-800 font-bold mb-4 uppercase">
              Welcome to <br />
              <span class="text-green-800">TANZANIA PRIVATE SECTOR FOUNDATION.</span>
            </h2>
            <div class="flex flex-col mb-6">
              <p class="tex-base text-slate-600">
                Established in 1998 with just 33 members, TPSF has grown exponentially to
                become the umbrella organization for over 400 direct members, including
                Business Management Organizations and private corporations. Our members
                collectively serve over 6 million businesses across Tanzania and Zanzibar.
              </p>
              <p class="tex-base text-slate-600 mt-3">
                TPSF serves as the Government's strategic partner and the foremost
                advocate for the private sector. We are committed to representing a
                unified voice, advising on policy formulation and reviews, and advocating
                for an enabling business and investment climate.
              </p>
            </div>

            <div class="grid grid-cols-2 items-center gap-6 mb-10">
              <div class="">
                <div
                  class="h-10 w-10 inline-flex justify-center items-center bg-primary/20 text-primary text-2xl/none rounded-md mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="map-pin"
                    class="lucide lucide-map-pin h-6 w-6"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h6 class="text-lg font-bold mb-1">Where</h6>
                <p class="text-base font-semibold text-gray-500">
                  Julius Nyerere International Convention Centre, Dar es Salaam, Tanzania
                </p>
                <p>&nbsp;</p>
              </div>
              <div class="">
                <div
                  class="h-10 w-10 inline-flex justify-center items-center bg-primary/20 text-primary text-2xl/none rounded-md mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="circle-dot-dashed"
                    class="lucide lucide-circle-dot-dashed h-6 w-6"
                  >
                    <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"></path>
                    <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"></path>
                    <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"></path>
                    <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"></path>
                    <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"></path>
                    <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"></path>
                    <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"></path>
                    <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"></path>
                    <circle cx="12" cy="12" r="1"></circle>
                  </svg>
                </div>
                <h6 class="text-lg font-bold mb-1">When</h6>
                <p class="text-base font-semibold text-gray-500">
                  21<sup>st</sup> April 2024 Private Sector Marathon
                </p>
                <p class="text-base font-semibold text-gray-500">
                  23<sup>rd</sup> - 24<sup>th</sup> April 2024 Conference
                </p>
                <p class="text-base font-semibold text-gray-500">
                  25<sup>th</sup> AGM in the morning & Gala Dinner in the evening
                </p>
              </div>
            </div>

            <a
              href="#"
              class="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
              ><span
                class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"
              ></span
              >Learn More <i class="uil uil-angle-right text-xl/none align-middle"></i
            ></a>
          </div>
        </div>
        <!-- end grid-col -->
      </div>
      <!-- Grid End -->
    </div>
    <!-- Container End -->
  </section>
</template>

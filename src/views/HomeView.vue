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
    <div class="absolute bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900 inset-0 w-full h-full"></div>
    <!-- <div class="absolute inset-0 bg-black/30"></div> -->
    <!-- end backdrop -->

    <div class="container mx-auto">
      <div class="relative text-center">
        <span class="text-white font-medium bg-red-600/60 py-[5px] px-4 rounded-md">
          23 <sup>rd</sup> - 24 <sup>th</sup> April 2024
        </span>
        <h1 class="lg:text-6xl text-4xl font-extrabold text-blue-500 my-8">
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
            href="https://patten.co.tz/app/forms/U2FsdGVkX19qF2WVmime2FQdmime2Fn2%2BdJQr8VxyG6phNUwuxeP0%3D/chatbot?extension=#101e51&access=660e636cec00625"
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
            <h2 class="text-3xl text-gray-800 font-bold mb-4">
              Welcome to <br />
              <span class="text-blue-800">Tanzania Private Sector <br>Foundation.</span>
            </h2>
            <div class="flex flex-col mb-6">
              <p class="tex-base text-slate-700">
                Established in 1998 with just 33 members, TPSF has grown exponentially to
                become the umbrella organization for over 400 direct members, including
                Business Management Organizations and private corporations. Our members
                collectively serve over 6 million businesses across Tanzania and Zanzibar.
              </p>
              <p class="text-slate-700 mt-3">
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
                <p class="text-base font-semibold text-gray-400 py-4">
                  Julius Nyerere International Convention Centre, Dar es Salaam, Tanzania
                </p>
                <p class="text-base font-semibold text-gray-400 py-4">Super Dome, Dar es Salaam, <br> Tanzania</p>
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
                <!-- <p class="text-base font-semibold text-gray-400">
                  21<sup>st</sup> April 2024 Private Sector Marathon
                </p> -->
                <p class="text-base font-semibold text-gray-400 py-4">
                  23<sup>rd</sup> - 24<sup>th</sup> April 2024 <br> Conference
                </p>
                <p class="text-base font-semibold text-gray-400 py-4">
                  25<sup>th</sup> AGM in the morning & Gala Dinner in the evening
                </p>
              </div>
            </div>

            <a
              href="https://tpsftz.org/"
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

  <section class="text-gray-700 body-font overflow-hidden border-t bg-black py-12">

    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Would you love to sponsor us?</h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Take the first step towards unlocking your potential - choose your package now and embark on a journey of growth and prosperity with TPSF</p>
      </div>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/4 mt-48 hidden lg:block">
      <div class="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden text-sm">
        <p class="bg-gray-400 text-gray-900 h-12 text-left px-4 flex items-center justify-start py-2">Right to be mentioned and placement of logo in all preromotion materials</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">Right to be mentioned in short video clips</p>
        <p class="bg-gray-400 text-gray-900 h-12 text-left px-4 flex items-center justify-start">To be featured in the Private sector 25 commemorative Journal</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">Private Sector Marathon</p>
        <p class="bg-gray-400 h-20 text-gray-900 text-left px-4 flex items-center justify-start">Brief introduction of the company & products and services in line with the theme.</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">Sitting at high table</p>
        <p class="bg-gray-400 h-20 text-gray-900 text-left px-4 flex items-center justify-start">Logo placement on all marketing and Promotional materials for the event Banners, program etc.</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">Inside main hall branding as per guidelines which will be provided</p>
        <p class="bg-gray-400 h-20 text-gray-900 text-left px-4 flex items-center justify-start">Full page advertisement in the conference programme inside cover</p>
        <p class="text-gray-400 h-20 text-left px-4 flex items-center justify-start">Projector/LED screen advertisement of the sponsors products display throughout the event</p>
        <p class="bg-gray-400 h-12 text-gray-900 text-left px-4 flex items-center justify-start">Distribute promotion materials to all delegates inside the venue</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">Right to distribute giveaways to dele ates inside the venue</p>
        <p class="bg-gray-400 h-12 text-gray-900 text-left px-4 flex items-center justify-start">Logo placement in all romotion avenues</p>
        <p class="text-gray-400 h-20 text-left px-4 flex items-center justify-start">Acknowledgement as sponsor in all key statements/ speeches / Press Conferences</p>
        <p class="bg-gray-400 h-12 text-gray-900 text-left px-4 flex items-center justify-start">Mention in during the live coverage on radio and TV as well as the MC</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">Mention in all media attendances</p>
        <p class="bg-gray-400 h-12 text-gray-900 text-left px-4 flex items-center justify-start">Right to logo placement on program</p>
        <p class="text-gray-400 h-12 text-left px-4 flex items-center justify-start">A display area for your brand promotion at the main entrance</p>
        <p class="bg-gray-400 text-gray-900 text-left px-4 flex items-center justify-start">Official Photo opportunity with the hi h- rofile uests</p>
        <p class="text-gray-400 h-12 text-;eft px-4 flex items-center justify-start">Certificate of Appreciation b Guest of Honor</p>
      </div>
    </div>
    <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
      <div class="lg:w-1/4 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
        <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest text-white">PLATINUM</h3>
          <h2 class="mr-2 text-5xl text-white font-extrabold">$ 50,000</h2>
        </div>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class="h-12 bg-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class=" bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          All
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          Strategic location (as outlined in the look and feel document)
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p><p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p><p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
      </div>
      <div class="lg:w-1/4 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-gray-300 relative">
        <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest text-white">GOLD</h3>
          <h2 class="mr-2 text-5xl text-white font-extrabold">$ 30,000</h2>
        </div>
        </div>
        
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class="h-12 bg-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class=" bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          All
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          Strategic location (as outlined in the look and feel document)
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p><p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
      </div>
      <div class="lg:w-1/4 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-gray-300 relative">
        <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest text-white">SILVER</h3>
          <h2 class="mr-2 text-5xl text-white font-extrabold">$ 10,000</h2>
        </div>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class="h-12 bg-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class=" bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          All
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          Strategic location (as outlined in the look and feel document)
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p><p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
      </div>
      <div class="lg:w-1/4 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
        <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h3 class="tracking-widest text-white">BRONZE</h3>
          <h2 class="mr-2 text-5xl text-white font-extrabold">$ 5,000</h2>
        </div>
        
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="h-12 bg-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">Half a page</p>
        <p class="h-12 text-gray-400 px-6 text-center leading-relaxed flex items-center justify-center">As a Main Sponsor</p>
        <p class=" bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          All
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          Strategic location (as outlined in the look and feel document)
        </p>
        <p class="bg-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p><p class="text-gray-400 text-center h-20 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p><p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="bg-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
        <p class="text-gray-400 text-center h-12 flex items-center justify-center">
          <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
        </p>
      </div>
    </div>
  </div>
</section>
</template>

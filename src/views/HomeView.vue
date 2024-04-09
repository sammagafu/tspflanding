<script setup>
import sliderImg from "@/assets/img/background/header.jpg";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { ref, computed } from "vue";

const now = new Date();
const april24th = ref(new Date(now.getFullYear(), 3, 24)); // Month in JavaScript Date starts from 0 (0-January, 1-February, ...)

if (now > april24th.value) { // If April 24th has already passed this year, calculate for next year
  april24th.value.setFullYear(april24th.value.getFullYear() + 1);
}

const timeRemaining = computed(() => april24th.value - now);


</script>

<template>
  <section id="home" class="py-14 lg:py-36 relative overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover"
    :style="'background-image: url(' + sliderImg + ');'">
    <div class="absolute bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900 inset-0 w-full h-full"></div>
    <!-- <div class="absolute inset-0 bg-black/30"></div> -->
    <!-- end backdrop -->

    <div class="container mx-auto">
      <div class="relative text-center mx-4">
        <span class="text-white font-medium bg-blue-800 py-[5px] px-4 rounded-md">
          23 <sup>rd</sup> - 24 <sup>th</sup> April 2024
        </span>
        <h1 class="lg:text-6xl text-3xl font-extrabold text-white my-8">
          25th Anniversary of TPSF-Celebrating 25 Years of Pioneering Private Sector-led
          Growth.
        </h1>
        <div class="flex justify-center">
          <div class="max-w-3xl text-center">
            <p class="font-medium text-xl text-white">
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
      <div class="container mx-auto mt-20">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:justify-center">
          <div class="relative">
            <a href="https://patten.co.tz/app/events/U2FsdGVkX18m4pQJ0Rbtp9GYRFOpNb795iBxePIF2ec%3D/registrations/attendees?extension=#101e51&access=660e636cec00625"
              class="text-xl font-medium py-3 px-9 bg-white text-primary rounded-lg transition-all duration-500 hover:shadow-white/10">Register
              Now</a>
          </div>
          <div class="relative">
            <a href="https://patten.co.tz/app/events/U2FsdGVkX19DcbWLMyY1cMWhzMj6d89UT%2BOUWp6AqRE%3D/registrations/attendees?extension=#101e51&access=660e636cec00625"
              class="text-xl font-medium py-3 px-9 bg-blue-700 text-white rounded-lg transition-all duration-500 hover:shadow-blue-800/10">Sponsor
              Event</a>
          </div>
        </div>
      </div>
      <!-- Flex End -->
    </div>
    <!-- Container End -->
  </section>

  <div class="gray bg-blue-100 mx-4 lg:container lg:mx-auto">
    <section id="about" class="sm:py-20 pt-20 pb-10 active">
      <div class="mx-2">
        <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
          <div>
            <img src=@/assets/img/homepage/chairman.jpg alt="Chairperson" class="max-w-full
          max-h-full h-auto">
          </div>
          <!-- end grid-col -->

          <div class="lg:me-6">
            <div class="mx-3">
              <h2 class="text-3xl text-gray-800 font-bold mb-4">
                Welcome to <br />
                <span class="text-blue-800">Tanzania Private Sector <br>Foundation.</span>
              </h2>
              <div class="flex flex-col my-6">
                <p class="font-medium text-xl text-slate-700">
                  Established in 1998 with just 33 members, TPSF has grown exponentially to
                  become the umbrella organization for over 400 direct members, including
                  Business Management Organizations and private corporations. Our members
                  collectively serve over 6 million businesses across Tanzania and Zanzibar.
                </p>
                <p class="font-medium text-xl text-slate-700 mt-3">
                  TPSF serves as the Government's strategic partner and the foremost
                  advocate for the private sector. We are committed to representing a
                  unified voice, advising on policy formulation and reviews, and advocating
                  for an enabling business and investment climate.
                </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 my-12">
                <div class="">
                  <h6 class="text-2xl font-bold mb-1">23<sup>rd</sup> - 24<sup>th</sup> April 2024 <br> Conference</h6>
                  <p class="text-base font-semibold text-slate-700 py-4">
                    Julius Nyerere International Convention Centre, Dar es Salaam, Tanzania
                  </p>

                </div>
                <div class="">
                  <h6 class="text-2xl font-bold mb-1">24<sup>th</sup> AGM in the morning & Gala Dinner in the evening
                  </h6>
                  <p class="text-base font-semibold text-slate-700 py-4">The Super Dome, Masaki Dar es Salaam, <br> Tanzania</p>
                </div>
              </div>

              <a href="https://tpsftz.org/"
                class="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"><span
                  class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>Learn
                More <i class="uil uil-angle-right text-xl/none align-middle"></i></a>
            </div>
          </div>
          <!-- end grid-col -->
        </div>
        <!-- Grid End -->
      </div>
      <!-- Container End -->
    </section>
    <div class="contact-section-one my-24  lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
      <div class="container mx-4">
        <div class="grid grid-flow-row lg:grid-flow-col" style="visibility: visible; animation-name: fadeInRight;">
          <div class="address-block-three flex mb-[70px] lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10">
            <div class="icon w-[35px] mt-[7px]"><img class=" ml-auto" src="@/assets/img/icon/icon_161.svg" alt=""></div>
            <div class="text w-[calc(100%_-_35px)] pl-[30px]">
              <h5 class="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">For
                Sponsoring</h5>
              <p
                class=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">
                <a href="tel:+255759979657"
                  class="call text-[22px] text-[color:var(--prime-two)] mt-[3px] hover:underline lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px]">+255
                  759 979 657</a></p>
            </div>
          </div> <!-- /.address-block-three -->

          <div class="address-block-three flex mb-[70px] lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10 ">
            <div class="icon w-[35px] mt-[7px]"><img class=" ml-auto" src="@/assets/img/icon/icon_163.svg" alt=""></div>
            <div class="text w-[calc(100%_-_35px)] pl-[30px]">
              <h5 class="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Messages
                and Call</h5>
              <p
                class=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">
                <a href="tel:+255752187582"
                  class="call text-[22px] text-[color:var(--prime-two)] mt-[3px] hover:underline lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px]">+255
                  752 187 582</a></p>
              <p
                class=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">
                <a href="tel:+255785274238"
                  class="call text-[22px] text-[color:var(--prime-two)] mt-[3px] hover:underline lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px]">+255 785 274 238</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

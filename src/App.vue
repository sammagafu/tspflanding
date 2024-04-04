<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <!--Main Navigation-->
  <header>
    <NavigationBar></NavigationBar>
  </header>
  <!--Main Navigation-->

  <RouterView />

  <Footer></Footer>
</template>

<script>
import Navbar from "~/components/navigation/Navbar.vue";
import Footer from "~/components/navigation/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Nuxt class="max-w-xs flex-1 mx-auto w-screen sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl" />
    <Footer />
  </div>
</template>
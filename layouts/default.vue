<script>
import Navbar from '~/components/navigation/Navbar.vue'
import Footer from '~/components/navigation/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <Nuxt class="w-screen max-w-7xl mx-auto flex-1" />
        <Footer />
    </div>
</template>
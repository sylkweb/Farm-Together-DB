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
    <div>
        <Navbar />
        <Nuxt class="max-w-7xl mx-auto" />
        <Footer />
    </div>
</template>
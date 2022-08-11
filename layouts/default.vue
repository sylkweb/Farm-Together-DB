<script>
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'

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
        <Nuxt />
        <Footer />
    </div>
</template>
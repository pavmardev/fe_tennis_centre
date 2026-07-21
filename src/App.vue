<script lang="ts">
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
}
</script>

<template>
  <Navbar />
  <body class="bg-gray-50 text-black antialiased">
    <RouterView />
  </body>
  <Footer />
</template>

<style scoped></style>

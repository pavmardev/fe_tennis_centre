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
  <v-app>
    <Navbar />

    <v-main class="bg-gray-50 text-black antialiased">
      <RouterView />
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped></style>

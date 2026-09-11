<template>
  <section class="max-w-lg mx-auto px-4 py-10 text-center">
    <div
      class="w-16 h-16 rounded-full bg-[#8dc707] flex items-center justify-center mx-auto mb-6 shadow-sm"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <h2 class="font-black text-black text-3xl mb-2">Booking Confirmed!</h2>
    <p class="text-black/40 text-sm mb-8">Confirmation sent to {{ user.email }}</p>

    <RouterLink
      :to="{ name: 'courts' }"
      class="px-6 py-3 bg-black text-[#8dc707] font-black rounded hover:opacity-80 transition-opacity shadow-md"
    >
      Book Another Court
    </RouterLink>
  </section>
</template>
<script>
import { useAuthStore } from '@/stores/auth'
import api from '../api/axios'

export default {
  name: 'ConfirmationView',
  data() {
    return {
      loading: false,
      error: null,
      user: null,
    }
  },
  created() {
    this.user = useAuthStore().user
  },
}
</script>

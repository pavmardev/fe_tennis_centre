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
    <p class="text-black/50 mb-2">Central Court 1 · 2026-06-23 at 12:00</p>
    <p class="text-black/40 text-sm mb-8">Confirmation sent to m.lindqvist@email.com</p>

    <div class="bg-white border border-black/10 rounded p-5 text-left mb-6 shadow-sm">
      <div class="flex justify-between text-sm mb-2">
        <span class="text-black/50">Court fee</span>
        <span class="font-bold text-black">$30</span>
      </div>
      <div class="flex justify-between text-sm mb-2">
        <span class="text-black/50">Equipment</span>
        <span class="font-bold text-black">$3</span>
      </div>
      <div
        class="border-t border-black/[0.08] mt-3 pt-3 flex justify-between font-black text-black text-base"
      >
        <span>Total</span>
        <span>$33</span>
      </div>
    </div>

    <button
      class="px-6 py-3 bg-black text-[#8dc707] font-black rounded hover:opacity-80 transition-opacity shadow-md"
    >
      Book Another Court
    </button>
  </section>
</template>
<script>
import api from '../api/axios'
import { useCourtStore } from '@/stores/court'

export default {
  name: 'ConfirmationView',
  data() {
    return {
      loading: false,
      error: null,
      user: null,
    }
  },
  async created() {
    this.loading = true
    try {
      const response = await api.fetchMe()
      this.user = response
    } catch (err) {
      this.$router.push('/')
    } finally {
      this.loading = false
    }
  },
}
</script>

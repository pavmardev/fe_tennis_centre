<template>
  <body class="bg-gray-50 text-black py-10">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="font-black text-black text-3xl">Book a Court</h1>
          <p class="text-black/50 text-sm mt-1">
            Pick a surface, choose a date and grab your slot.
          </p>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <button
            v-for="cat in categories"
            @click="setCategory(cat)"
            class="px-4 py-2 rounded text-xs font-bold capitalize transition-colors"
            :class="selectedCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>
      <CourtsListView :category="defaultCategory" />
    </section>

    <hr class="border-black/10 my-10 max-w-7xl mx-auto" />

    <hr class="border-black/10 my-10 max-w-7xl mx-auto" />

    <hr class="border-black/10 my-10 max-w-7xl mx-auto" />

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
  </body>
</template>

<script>
import CourtsListView from './CourtsListView.vue'
export default {
  name: 'CourtsView',
  components: {
    CourtsListView,
  },
  data() {
    return {
      categories: ['All', 'Clay', 'Grass', 'Indoor'],
      defaultCategory: 'All',
    }
  },
  methods: {
    setCategory(cat) {
      this.defaultCategory = cat
    },
    selectedCategory(cat) {
      if (this.defaultCategory == cat) {
        return 'text-black bg-[#8dc707]'
      } else {
        return 'bg-white text-black/60 border border-black/[0.12] hover:border-[#8dc707]/50'
      }
    },
  },
}
</script>

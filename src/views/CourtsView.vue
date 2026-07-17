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

    <section class="max-w-lg mx-auto px-4 mb-20">
      <button
        class="flex items-center gap-1.5 text-sm text-black/40 mb-6 hover:text-black transition-colors font-medium"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back
      </button>
      <h2 class="font-black text-black text-2xl mb-6">Confirm Booking</h2>

      <div class="bg-white border border-black/10 rounded overflow-hidden mb-4 shadow-sm">
        <div
          class="h-36 bg-slate-700 flex items-center justify-center text-white/10 font-bold relative"
        >
          Court Preview
        </div>
        <div class="p-4">
          <div class="mb-3">
            <h3 class="font-black text-black text-lg">Central Court 1</h3>
            <span
              class="bg-amber-700 text-white text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded inline-block mt-1"
              >Clay</span
            >
          </div>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="bg-black/[0.04] rounded p-3">
              <div class="text-black/40 text-xs mb-0.5">Date</div>
              <div class="font-bold text-black">2026-06-23</div>
            </div>
            <div class="bg-black/[0.04] rounded p-3">
              <div class="text-black/40 text-xs mb-0.5">Time</div>
              <div class="font-bold text-black">12:00 – 13:00</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-black/10 rounded p-5 mb-4 shadow-sm">
        <h4 class="font-black text-black mb-3">Add Equipment Rental</h4>
        <div class="space-y-2">
          <button
            class="w-full flex items-center justify-between p-3 rounded border-2 border-black/[0.08] hover:border-[#8dc707]/50 transition-colors bg-white"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-xl">🎾</span>
              <div class="text-left">
                <div class="text-sm font-bold text-black">Tennis Racket</div>
                <div class="text-xs text-black/40">$5/match</div>
              </div>
            </div>
            <div
              class="w-5 h-5 rounded border-2 border-black/20 flex items-center justify-center"
            ></div>
          </button>

          <button
            class="w-full flex items-center justify-between p-3 rounded border-2 border-[#8dc707] bg-[#8dc707]/5 transition-colors"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-xl">🟡</span>
              <div class="text-left">
                <div class="text-sm font-bold text-black">Can of 4 Balls</div>
                <div class="text-xs text-black/40">$3/can</div>
              </div>
            </div>
            <div
              class="w-5 h-5 rounded border-2 border-[#8dc707] bg-[#8dc707] flex items-center justify-center"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div class="bg-white border border-black/10 rounded p-5 mb-6 shadow-sm">
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-black/50">Court (day)</span>
            <span class="font-bold text-black">$30</span>
          </div>
          <div class="flex justify-between">
            <span class="text-black/50">Can of 4 Balls</span>
            <span class="font-bold text-black">$3</span>
          </div>
          <div
            class="border-t border-black/[0.08] pt-2 mt-2 flex justify-between font-black text-black text-base"
          >
            <span>Total</span><span>$33</span>
          </div>
        </div>
      </div>

      <button
        class="w-full py-3.5 bg-[#8dc707] text-black font-black rounded hover:bg-[#9fd608] transition-colors shadow-sm"
      >
        Confirm & Pay $33
      </button>
      <p class="text-center text-xs text-black/40 mt-3">Free cancellation up to 24h before</p>
    </section>

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

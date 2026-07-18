<template>
  <section class="max-w-lg mx-auto px-4 mb-20">
    <RouterLink
      :to="{ name: 'book-details', params: { id: courtDetails.id } }"
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
    </RouterLink>
    <h2 class="font-black text-black text-2xl mb-6">Confirm Booking</h2>
    <div
      v-if="courtDetails"
      class="bg-white border border-black/10 rounded overflow-hidden mb-4 shadow-sm"
    >
      <div
        class="h-36 bg-slate-700 flex items-center justify-center text-white/10 font-bold relative"
      >
        Court Preview
      </div>
      <div class="p-4">
        <div class="mb-3">
          <h3 class="font-black text-black text-lg">{{ courtDetails.name }}</h3>
          <span
            class="bg-[#8dc707] text-black text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded inline-block mt-1"
            >{{ courtDetails.surface }}</span
          >
        </div>

        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-black/[0.04] rounded p-3">
            <div class="text-black/40 text-xs mb-0.5">Date</div>
            <div class="font-bold text-black">{{ bookDetails[0] }}</div>
          </div>
          <div class="bg-black/[0.04] rounded p-3">
            <div class="text-black/40 text-xs mb-0.5">Time</div>
            <div class="font-bold text-black">{{ bookDetails[1] }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white border border-black/10 rounded p-5 mb-4 shadow-sm">
      <h4 class="font-black text-black mb-3">Add Equipment Rental</h4>
      <div class="space-y-2">
        <button
          v-for="eq in equipment"
          @click="setEquipment(eq)"
          :class="background(eq.id)"
          class="w-full flex items-center justify-between p-3 rounded border-2 border-black/[0.08] hover:border-[#8dc707]/50 transition-colors"
        >
          <div class="flex items-center gap-2.5">
            <span class="text-xl">{{ eq.logo }}</span>
            <div class="text-left">
              <div class="text-sm font-bold text-black">{{ eq.name }}</div>
              <div class="text-xs text-black/40">${{ eq.cost }}/{{ eq.metrics }}</div>
            </div>
          </div>
          <div
            v-show="equip.some((e) => e.id == eq.id)"
            class="w-5 h-5 rounded border-2 border-black/[0.5] bg-[#8dc707] flex items-center justify-center"
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
          <span class="text-black/50">Court</span>
          <span class="font-bold text-black">${{ isEvening }}</span>
        </div>
        <div v-if="orderedEquipment" v-for="orEq in equip" class="flex justify-between">
          <span class="text-black/50">{{ orEq.name }}</span>
          <span class="font-bold text-black">${{ orEq.cost }}</span>
        </div>
        <div
          class="border-t border-black/[0.08] pt-2 mt-2 flex justify-between font-black text-black text-base"
        >
          <span>Total</span><span>${{ countTotalCost }}</span>
        </div>
      </div>
    </div>

    <button
      class="w-full py-3.5 bg-[#8dc707] text-black font-black rounded hover:bg-[#9fd608] transition-colors shadow-sm"
    >
      Confirm & Pay ${{ countTotalCost }}
    </button>
    <p class="text-center text-xs text-red-500 mt-3">Free cancellation up to 24h before</p>
  </section>
</template>

<script>
import { useCourtStore } from '@/stores/court'
export default {
  name: 'BookConfirmation',
  data() {
    return {
      equip: [],
    }
  },
  methods: {
    setEquipment(eq) {
      if (this.equip.some((e) => e.id == eq.id)) {
        this.equip = this.equip.filter((item) => item.id !== eq.id)
      } else {
        this.equip.push(eq)
      }
    },
    background(eqID) {
      if (this.equip.some((e) => e.id == eqID)) {
        return 'bg-[#8dc707]'
      } else {
        return 'bg-white'
      }
    },
  },
  computed: {
    hourString() {
      const store = parseInt(useCourtStore().hour.slice(0, 2))
      return store
    },
    courtDetails() {
      return useCourtStore().selectedCourt
    },
    bookDetails() {
      return [useCourtStore().date, useCourtStore().hour]
    },
    isEvening() {
      if (this.hourString >= 14) {
        return this.courtDetails.pricing[1]
      } else {
        return this.courtDetails.pricing[0]
      }
    },
    equipment() {
      return useCourtStore().equipment
    },
    orderedEquipment() {
      if (this.equip.length > 0) {
        return this.equip
      }
    },
    countTotalCost() {
      let totalCost = 0
      for (let i = 0; i < this.equip.length; i++) {
        totalCost += this.equip[i].cost
      }
      return this.isEvening + totalCost
    },
  },
}
</script>

<template>
  <section class="max-w-2xl mx-auto px-4 mb-20">
    <RouterLink
      :to="{ name: 'courts' }"
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
      All Courts
    </RouterLink>
    <div v-if="selectedCourt" class="flex flex-col gap-6 mb-8">
      <!-- Hlavička kurtu -->
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded overflow-hidden bg-black/10 shrink-0">
          <div
            class="w-full h-full bg-slate-700 flex items-center justify-center text-white/10 text-xs font-bold"
          >
            Court
          </div>
        </div>
        <div>
          <h2 class="font-black text-black text-2xl">{{ selectedCourt.name }}</h2>
          <div class="flex items-center gap-2 mt-1">
            <span
              class="bg-[#8dc707] text-black text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded"
              >{{ selectedCourt.surface }}</span
            >
            <span class="text-black/40 text-xs">${{ selectedCourt.price }}/hr</span>
          </div>
        </div>
      </div>

      <p v-if="selectedCourt.description" class="text-black/70 text-sm leading-relaxed">
        {{ selectedCourt.description }}
      </p>

      <div v-if="selectedCourt.features?.length" class="flex flex-wrap gap-2">
        <span
          v-for="(feature, index) in selectedCourt.features"
          :key="index"
          class="bg-black/5 text-black/70 text-xs font-bold px-2.5 py-1 rounded"
        >
          {{ feature.description }}
        </span>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-sm font-bold text-black/60 mb-2">Select Date</label>
      <input
        v-model="date"
        :min="minDate"
        type="date"
        value="2026-06-23"
        min="2026-06-23"
        class="px-4 py-2.5 rounded border border-black/[0.15] bg-white text-black text-sm focus:outline-none focus:border-[#8dc707] focus:ring-2 focus:ring-[#8dc707]/20"
      />
    </div>

    <div class="mb-6" v-if="date">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-black text-black">Available Slots</h3>
      </div>

      <div class="grid grid-cols-4 sm:grid-cols-7 gap-2">
        <button
          v-for="hour in availableTimeSlots"
          :key="hour.id"
          @click="setBookHour(hour.time_slot)"
          :class="setBackgroundColor(hour)"
          class="py-2.5 rounded text-xs font-bold border"
        >
          {{ hour.time_slot }}
        </button>
      </div>
    </div>

    <RouterLink
      :to="{ name: 'book-confirmation' }"
      v-if="hour && date"
      @click="(setHourAndDate(), courtSelection())"
      class="block w-full text-center py-3.5 bg-black text-[#8dc707] font-black rounded hover:opacity-80 transition-opacity"
    >
      Continue with {{ isSetHour }} →
    </RouterLink>
  </section>
</template>

<script>
import api from '../api/axios'
import { useCourtStore } from '@/stores/court'
export default {
  name: 'BookDetailsView',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
      date: null,
      hour: null,
      selectedCourt: null,
      timeSlots: null,
    }
  },
  watch: {
    date(newValue, oldValue) {
      this.getAvailableTimeSlots(newValue)
    },
  },
  methods: {
    courtSelection() {
      if (this.selectedCourt) {
        useCourtStore().setCourt(this.selectedCourt)
      }
    },
    setBookHour(h) {
      this.hour = h
      console.log(this.hour)
    },
    setBackgroundColor(h) {
      if (this.hour == h) {
        return 'bg-[#8dc707] text-black border-[#8dc707]'
      } else {
        return 'bg-white text-black border-black/[0.12] hover:border-[#8dc707]'
      }
    },
    setHourAndDate() {
      useCourtStore().setSelectedDateAndTime(this.isSetHour, this.isSetDate)
    },
    async getAvailableTimeSlots(date) {
      this.loading = true
      try {
        const response = await api.post(`/courts/${this.id}/available-time-slots`, {
          reservation_date: this.date,
        })
        this.timeSlots = response.data.data
      } catch (err) {
        this.error = err
        console.log(err)
      } finally {
        this.loading = false
      }
    },
  },
  computed: {
    isSetHour() {
      if (this.hour) {
        return this.hour
      }
    },
    availableTimeSlots() {
      return this.timeSlots
    },
    isSetDate() {
      if (this.date) {
        return this.date
      }
    },
    minDate() {
      return new Date().toISOString().split('T')[0]
    },
  },

  async created() {
    this.loading = true
    try {
      const [response1, response2] = await Promise.all([
        api.get(`/courts/${this.id}`),
        api.get('/time-slots'),
      ])
      this.selectedCourt = response1.data.data
      this.timeSlots = response2.data.data
    } catch (err) {
      this.error = err
      console.log(this.error)
    } finally {
      this.loading = false
    }
  },
}
</script>

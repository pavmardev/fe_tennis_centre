<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div class="flex items-center justify-between mb-2">
      <h1 class="font-black text-black text-3xl">{{ setTitle }}</h1>
      <button
        v-if="this.$route.name == 'admin' && this.showAll"
        class="px-4 py-2 bg-[#8dc707] hover:bg-[#7cb006] text-black font-bold text-xs rounded transition-colors"
      >
        + Add Reservation
      </button>
    </div>
    <p class="text-black/50 text-sm mb-8">Manage and track all your court reservations.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
      <div class="bg-white border border-black/10 rounded p-4">
        <div class="flex items-center gap-2 text-black/40 mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="text-xs">Upcoming</span>
        </div>
        <div class="font-black text-black text-2xl">{{ countUpcomingReservations.length }}</div>
      </div>

      <div class="bg-white border border-black/10 rounded p-4">
        <div class="flex items-center gap-2 text-black/40 mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span class="text-xs">Total Bookings</span>
        </div>
        <div class="font-black text-black text-2xl">{{ bookings.length }}</div>
      </div>
    </div>

    <div class="flex items-center gap-2 mb-5 flex-wrap">
      <button
        @click="setCategory(c)"
        :class="backgroundButton(c)"
        :key="c.id"
        v-for="c in bookingCategories"
        class="px-3 py-1.5 rounded text-xs font-bold capitalize transition-colors border border-black/10 hover:border-[#8dc707]/50"
      >
        {{ c }}
      </button>
    </div>

    <div class="space-y-3">
      <div
        v-for="book in filterByCategory"
        :key="book.id"
        class="bg-white border border-black/10 rounded p-4 sm:p-5"
      >
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1 min-w-[280px]">
            <div class="flex flex-col items-center sm:col-span-3 sm:items-start shrink-0">
              <div class="w-9 h-9 rounded bg-[#8dc707]/15 flex items-center justify-center">
                <span class="text-xs font-black text-[#5a8000]">{{ book.surface }}</span>
              </div>
              <span v-if="$route.name === 'admin'" class="font-black text-black text-base mt-1">
                #ID-{{ book.id }}
              </span>
            </div>

            <div class="sm:col-span-4 space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-black text-black text-base">{{ book.court }}</span>
                <span
                  :class="selectColor(book.state)"
                  class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                >
                  {{ book.state }}
                </span>
              </div>

              <div
                v-if="$route.name === 'admin' && book.name"
                class="flex items-center gap-1.5 text-xs font-semibold text-black/70"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{{ book.name }}</span>
              </div>
            </div>

            <div class="sm:col-span-5 flex flex-col justify-center gap-1.5 text-xs text-black/60">
              <div class="flex items-center gap-4 flex-wrap">
                <span class="flex items-center gap-1.5 font-medium">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {{ book.reservation_date }}
                </span>
                <span class="flex items-center gap-1.5 font-medium">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {{ book.reservation_time }}
                </span>
              </div>

              <div v-if="book.equipment" class="flex items-center gap-2 flex-wrap">
                <span
                  v-for="eq in book.equipment"
                  :key="eq.id"
                  class="flex items-center gap-1 text-black/50"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
                      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                    ></path>
                  </svg>
                  {{ eq.name }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="showDiv(book.state)" class="flex items-center gap-3 shrink-0 ml-auto">
            <button
              @click="cancelReservation(book.id)"
              class="text-xs text-red-500 hover:text-red-700 font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              @click="selectBook(book)"
              class="text-xs text-black-500 hover:text-black-700 font-bold transition-colors"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>

    <EditReservationView
      v-if="selectedBooking"
      v-model="showEditModal"
      :booking="selectedBooking"
      @notify="handleNotification"
    />
    <v-snackbar v-model="showSnackbar" timeout="3000" location="top" :color="snackbarColor">
      <div class="flex items-center justify-center w-full text-center">
        {{ snackbarText }}
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import api from '../api/axios'
import EditReservationView from './EditReservationView.vue'
export default {
  name: 'ReservationsView',
  components: {
    EditReservationView,
  },
  props: {
    showAll: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      error: null,
      loading: false,
      bookingCategories: ['All', 'Upcoming', 'Finished'],
      bookings: [],
      category: 'All',
      showSnackbar: false,
      snackbarColor: 'success',
      snackbarText: '',
      showEditModal: false,
      selectedBooking: null,
    }
  },
  methods: {
    selectColor(state) {
      if (state == 'Upcoming') {
        return 'bg-emerald-500/10 text-emerald-600'
      } else {
        return 'bg-amber-500/10 text-amber-600'
      }
    },
    showDiv(state) {
      if (state != 'Finished') {
        return true
      }
    },
    selectBook(book) {
      this.selectedBooking = book
      this.showEditModal = true
    },
    setCategory(cat) {
      this.category = cat
    },
    backgroundButton(cat) {
      if (this.category == cat) {
        return 'bg-[#8dc707] text-black'
      } else {
        return 'bg-white text-black/50'
      }
    },
    async fetchReservations() {
      this.loading = true
      const user = useAuthStore().user.id

      try {
        if (this.$route.name == 'reservations') {
          const response = await api.get(`/reservations/user/${user}`)
          this.bookings = response?.data.data
        } else {
          const response = await api.get('/reservations')
          this.bookings = response?.data.data
        }
      } catch (err) {
        this.error = err.response?.data?.message
      } finally {
        this.loading = false
      }
      this.setReservationState()
    },
    async cancelReservation(bookId) {
      this.loading = true
      this.error = null

      try {
        const response = await api.delete(`/reservations/${bookId}`)
        this.snackbarColor = 'success'
        this.snackbarText = response.data?.message
        this.showSnackbar = true
        await this.fetchReservations()
      } catch (err) {
        this.error = err.response?.data?.message || err.message
        this.snackbarColor = 'error'
        this.snackbarText = err.response?.data?.message
        this.showSnackbar = true
      } finally {
        this.loading = false
      }
    },
    setReservationState() {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const currentDate = `${year}-${month}-${day}`

      if (this.bookings) {
        this.bookings = this.bookings.map((book) => {
          let state = 'Finished'

          if (book.reservation_date >= currentDate) {
            state = 'Upcoming'
          }

          return { ...book, state }
        })
      }
    },
    async handleNotification({ text, color, refresh }) {
      this.snackbarText = text
      this.snackbarColor = color
      this.showSnackbar = true

      if (refresh) {
        await this.fetchReservations()
      }
    },
  },
  computed: {
    filterByCategory() {
      let result = Array.isArray(this.bookings) ? this.bookings : []

      if (this.category !== 'All') {
        result = result.filter((c) => c.state === this.category)
      }

      if (this.$route.name === 'admin' && !this.showAll) {
        return result.slice(0, 10)
      }

      return result
    },
    countUpcomingReservations() {
      return this.bookings.filter((res) => res.state == 'Upcoming')
    },
    setTitle() {
      if (this.$route.name == 'reservations') {
        return 'My Bookings'
      } else {
        return 'Bookings'
      }
    },
  },
  async created() {
    this.fetchReservations()
  },
}
</script>

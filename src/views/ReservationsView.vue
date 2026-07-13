<template>
  <body class="bg-gray-50 text-black antialiased">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 class="font-black text-black text-3xl mb-2">My Bookings</h1>
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
          <div class="font-black text-black text-2xl">2</div>
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
          <div class="font-black text-black text-2xl">4</div>
        </div>

        <div class="bg-white border border-black/10 rounded p-4 col-span-2 sm:col-span-1">
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
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            <span class="text-xs">Total Spent</span>
          </div>
          <div class="font-black text-black text-2xl">$104</div>
        </div>
      </div>

      <div class="flex items-center gap-2 mb-5 flex-wrap">
        <!---<button
          class="px-3 py-1.5 rounded text-xs font-bold capitalize transition-colors 
        >
          all
        </button>-->
        <button
          @click="setCategory(c)"
          :class="backgroundButton(c)"
          :key="c"
          v-for="c in bookingCategories"
          class="px-3 py-1.5 rounded text-xs font-bold capitalize transition-colors border border-black/10 hover:border-[#8dc707]/50"
        >
          {{ c }}
        </button>
      </div>

      <div class="space-y-3">
        <div
          v-for="book in filterByCategory"
          class="bg-white border border-black/10 rounded p-4 sm:p-5"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex items-start gap-3">
              <div
                class="mt-0.5 w-9 h-9 rounded bg-[#8dc707]/15 flex items-center justify-center shrink-0"
              >
                <span class="text-xs font-black text-[#5a8000]">{{ book.surface }}</span>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-black text-black">{{ book.name }}</span>
                  <span
                    :class="selectColor(book.state)"
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  >
                    {{ book.state }}
                  </span>
                </div>
                <div class="flex items-center gap-3 mt-1 text-xs text-black/40">
                  <span class="flex items-center gap-1"
                    ><svg
                      width="11"
                      height="11"
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
                    {{ book.date }}</span
                  >
                  <span class="flex items-center gap-1"
                    ><svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ book.time }}</span
                  >
                  <span v-if="book.equipment" class="flex items-center gap-1"
                    ><svg
                      width="11"
                      height="11"
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
                    {{ book.equipment }}</span
                  >
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="font-black text-black text-lg">{{ book.price }}</span>
              <button
                v-if="book.state != 'Cancelled'"
                class="text-xs text-red-500 hover:text-red-700 font-bold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <!---<div class="bg-white border border-black/10 rounded p-4 sm:p-5 opacity-70">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex items-start gap-3">
              <div
                class="mt-0.5 w-9 h-9 rounded bg-black/5 flex items-center justify-center shrink-0"
              >
                <span class="text-xs font-black text-black/40">CL</span>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-black text-black/60 line-through">Court 1 (Clay)</span>
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-600"
                  >
                    Cancelled
                  </span>
                </div>
                <div class="flex items-center gap-3 mt-1 text-xs text-black/30">
                  <span class="flex items-center gap-1"
                    ><svg
                      width="11"
                      height="11"
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
                    2026-07-01</span
                  >
                  <span class="flex items-center gap-1"
                    ><svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    10:00 - 11:30</span
                  >
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-bold text-black/40 text-lg">$45</span>
              <span class="text-xs text-black/30">#RES-9300</span>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'ReservationsView',
  data() {
    return {
      bookingCategories: ['All', 'Confirmed', 'Pending', 'Cancelled'],
      bookings: [
        {
          surface: 'CL',
          name: 'Court 1 (Clay)',
          date: '2026-07-10',
          time: '2026-07-10',
          equipment: '2x Rackets',
          state: 'Confirmed',
          price: '$45',
        },
        {
          surface: 'GR',
          name: 'Court 3 (Grass)',
          date: '2026-07-12',
          time: '09:00 - 10:00',
          state: 'Pending',
          price: '$30',
        },
        {
          surface: 'HA',
          name: 'Court 2 (Hardcourt)',
          date: '2026-06-28',
          time: '18:00 - 19:00',
          state: 'Cancelled',
          equipment: '1x Balls',
          price: '$29',
        },
      ],
      category: 'All',
    }
  },
  methods: {
    selectColor(state) {
      if (state == 'Confirmed') {
        return 'bg-emerald-500/10 text-emerald-600'
      } else if (state == 'Pending') {
        return 'bg-amber-500/10 text-amber-600'
      } else {
        return 'bg-red-500/10 text-red-600'
      }
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
  },
  computed: {
    filterByCategory() {
      if (this.category == 'All') {
        return this.bookings
      } else {
        return this.bookings.filter((c) => c.state == this.category)
      }
    },
  },
}
</script>

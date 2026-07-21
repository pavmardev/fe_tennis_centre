<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
    <div class="flex items-center justify-between mb-8">
      <div>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-bold text-black/40 tracking-widest uppercase mb-1"
        >
          <svg
            class="text-[#8dc707]"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"
            />
          </svg>
          Administrator
        </span>
        <h1 class="font-black text-black text-3xl">Club Dashboard</h1>
      </div>
      <div class="hidden sm:flex items-center gap-2">
        <button
          class="flex items-center gap-1.5 px-3 py-2 bg-white border border-black/12 rounded text-sm text-black/60 hover:border-[#8dc707]/50 transition-colors font-medium shadow-sm"
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
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
          Refresh
        </button>
        <button
          class="flex items-center gap-1.5 px-3 py-2 bg-[#8dc707] rounded text-sm text-black font-black hover:bg-[#9fd608] transition-colors shadow-sm"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Court
        </button>
      </div>
    </div>

    <div class="flex gap-0 mb-7 border-b border-black/10">
      <button
        v-for="button in dashboardButtons"
        @click="selectDashboard(button)"
        :class="setBorderColor(button)"
        class="px-4 py-2.5 text-sm font-bold capitalize border-b-2 -mb-px transition-colors text-black"
      >
        {{ button }}
      </button>
    </div>

    <section class="mb-12">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-black text-black text-xl">All Reservations</h2>
        <div class="relative hidden sm:block">
          <svg
            class="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            placeholder="Search player or court…"
            class="pl-8 pr-4 py-2 bg-white border border-black/12 rounded text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#8dc707] w-52"
          />
        </div>
      </div>

      <div class="bg-white border border-black/10 rounded overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-black/8 bg-black/[0.03]">
                <th
                  v-for="heading in reservationsTableHead"
                  class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                >
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="res in reservationsData"
                class="border-b border-black/5 hover:bg-black/[0.02] transition-colors"
              >
                <td class="px-4 py-3.5 text-xs text-black/30 font-mono">{{ res.id }}</td>
                <td class="px-4 py-3.5">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-7 h-7 rounded-full bg-black flex items-center justify-center text-[10px] text-[#8dc707] shrink-0 font-black"
                    >
                      {{ res.name[0] }}
                    </div>
                    <span class="font-bold text-black whitespace-nowrap">{{ res.name }}</span>
                  </div>
                </td>
                <td class="px-4 py-3.5 text-black/60 whitespace-nowrap">{{ res.court }}</td>
                <td class="px-4 py-3.5 text-black/60 whitespace-nowrap">{{ res.dateTime }}</td>
                <td class="px-4 py-3.5">
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800"
                    >{{ res.status }}</span
                  >
                </td>
                <td class="px-4 py-3.5">
                  <div class="flex items-center gap-1">
                    <button
                      class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button
                      class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                      </svg>
                    </button>
                    <button
                      class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-red-500 transition-colors"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <CourtsListView />
    <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <button
        class="border-2 border-dashed border-black/15 rounded p-6 flex flex-col items-center justify-center gap-2 text-black/30 hover:border-[#8dc707] hover:text-[#8dc707] transition-colors min-h-[200px] font-bold bg-white/50"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span class="text-sm">Add New Court</span>
      </button>
    </section>
  </div>
</template>
<script>
import CourtsListView from './CourtsListView.vue'
export default {
  name: 'AdminView',
  components: {
    CourtsListView,
  },
  data() {
    return {
      dashboardButtons: ['Overview', 'Reservations', 'Courts'],
      selectedDashboard: 'Overview',
      reservationsTableHead: ['ID', 'PLAYER', 'COURT', 'DATE & TIME', 'STATUS', 'ACTIONS'],
      reservationsData: [
        {
          id: '#RES-8942',
          name: 'John Doe',
          court: 'Central Court 1',
          dateTime: 'Today · 14:00 - 15:30',
          status: 'Confirmed',
        },
        {
          id: '#RES-8943',
          name: 'Anna Smith',
          court: 'Clay Court 2',
          dateTime: 'Tomorrow · 09:00 - 10:00',
          status: 'Pending',
        },
      ],
    }
  },
  methods: {
    selectDashboard(dasboard) {
      this.selectedDashboard = dasboard
    },
    setBorderColor(dashboard) {
      if (this.selectedDashboard == dashboard) {
        return 'border-[#8dc707]'
      } else {
        return 'border-transparent'
      }
    },
  },
  computed: {
    courtDetails() {},
  },
}
</script>

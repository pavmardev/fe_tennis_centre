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
    </div>

    <!-- Záložky (Tabs) -->
    <div class="flex gap-0 mb-7 border-b border-black/10">
      <button
        v-for="button in dashboardButtons"
        :key="button"
        @click="selectDashboard(button)"
        :class="[
          setBorderColor(button),
          selectedDashboard === button
            ? 'text-black font-bold'
            : 'text-gray-500 font-medium hover:text-black',
        ]"
        class="px-4 py-2.5 text-sm capitalize border-b-2 -mb-px transition-colors"
      >
        {{ button }}
      </button>
    </div>

    <!-- Obsah podľa vybranej záložky -->

    <!-- 1. Overview (Prehľad všetkého alebo súhrn) -->
    <section v-if="selectedDashboard === 'Overview'" class="space-y-10">
      <ReservationsView />
      <CourtsListView />
      <UsersView />
    </section>

    <!-- 2. Reservations -->
    <section v-else-if="selectedDashboard === 'Reservations'">
      <ReservationsView :showAll="true" />
    </section>

    <!-- 3. Courts -->
    <section v-else-if="selectedDashboard === 'Courts'">
      <CourtsListView :showAll="true" />
    </section>

    <!-- 4. Users -->
    <section v-else-if="selectedDashboard === 'Users'">
      <UsersView :showAll="true" />
    </section>

    <!-- 5. Equipment -->
    <section v-else-if="selectedDashboard === 'Equipment'">
      <div class="p-6 bg-gray-50 rounded-lg text-center text-gray-500">
        <h2 class="text-xl font-bold mb-2">Equipment Management</h2>
        <p>Tu môžete pridať komponent pre spravovanie vybavenia.</p>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../api/axios'
import CourtsListView from './CourtsListView.vue'
import ReservationsView from './ReservationsView.vue'
import UsersView from './UsersView.vue'

export default {
  name: 'AdminView',
  components: {
    CourtsListView,
    ReservationsView,
    UsersView,
  },
  data() {
    return {
      loading: false,
      error: [],
      users: [],
      equipment: [],
      memberships: [],
      dashboardButtons: ['Overview', 'Reservations', 'Courts', 'Users', 'Equipment'],
      selectedDashboard: 'Overview',
      reservationsData: null,
    }
  },
  methods: {
    selectDashboard(dashboard) {
      this.selectedDashboard = dashboard
    },
    setBorderColor(dashboard) {
      if (this.selectedDashboard === dashboard) {
        return 'border-[#8dc707]'
      } else {
        return 'border-transparent'
      }
    },
    getStatusInfo(reservationDate) {
      if (!reservationDate) {
        return { label: 'Unknown', badgeClass: 'bg-gray-100 text-gray-800' }
      }

      const today = new Date().toISOString().split('T')[0]

      if (reservationDate <= today) {
        return {
          label: 'Finished',
          badgeClass: 'bg-amber-100 text-amber-800',
        }
      } else {
        return {
          label: 'Confirmed',
          badgeClass: 'bg-green-100 text-green-800',
        }
      }
    },
    async fetchData() {
      this.loading = true
      this.error = []

      try {
        const results = await Promise.allSettled([
          api.get('/reservations'),
          api.get('/memberships'),
          api.get('/equipment'),
          api.get('/users'),
        ])

        const [resevationsRes, membershipsRes, equipmentRes, usersRes] = results

        if (resevationsRes.status === 'fulfilled') {
          this.reservationsData = resevationsRes.value.data.data
        } else {
          this.handleError('Reservations loading failed', resevationsRes.reason)
        }

        if (membershipsRes.status === 'fulfilled') {
          this.memberships = membershipsRes.value.data
        } else {
          this.handleError('Memberships loading failed', membershipsRes.reason)
        }

        if (equipmentRes.status === 'fulfilled') {
          this.equipment = equipmentRes.value.data
        } else {
          this.handleError('Equipment loading failed', equipmentRes.reason)
        }

        if (usersRes.status === 'fulfilled') {
          this.users = usersRes.value.data
        } else {
          this.handleError('Users loading failed', usersRes.reason)
        }
      } catch (globalError) {
        this.handleError('Unexpected error occured', globalError)
      } finally {
        this.loading = false
      }
    },
    handleError(message, error) {
      console.error(message, error)
      this.error.push(message)
    },
  },
  computed: {
    limitedReservations() {
      return Array.isArray(this.reservationsData) ? this.reservationsData.slice(0, 10) : []
    },
  },
  async created() {
    await this.fetchData()
  },
}
</script>

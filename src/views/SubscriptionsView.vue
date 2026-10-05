<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-10">
      <span class="text-[#8dc707] font-bold text-xs tracking-widest uppercase">Season Tickets</span>
      <h1 class="font-black text-black text-4xl mt-1 mb-3">Membership Plans</h1>
      <p class="text-black/50 max-w-xl mx-auto mb-6 text-sm">
        Credit-based season tickets. Bookings deduct from your balance automatically — no
        per-session invoices, no friction.
      </p>
    </div>

    <div v-if="subscriptions.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <div
        v-for="sub in subscriptions"
        :key="sub.id"
        :class="sub.name === 'Senior Plan' ? 'border-[#8dc707]' : 'border-black/10'"
        class="rounded border-2 overflow-hidden transition-colors hover:border-[#8dc707]/50"
      >
        <div
          v-if="sub.name === 'Senior Plan'"
          class="bg-[#8dc707] text-black text-[10px] font-black tracking-widest uppercase text-center py-1.5"
        >
          Most Popular
        </div>
        <div class="p-5 bg-white h-full flex flex-col justify-between">
          <div>
            <div class="text-sm font-bold text-black/40 mb-1">{{ sub.name }}</div>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="font-black text-black text-4xl">${{ sub.cost }}</span>
              <span class="text-xs text-black/40">/month</span>
            </div>
            <div class="text-xs font-bold text-[#8dc707] mb-4">
              {{ sub.duration ?? 'Unlimited' }} bookings/mo
            </div>

            <div class="space-y-2 mb-5">
              <div
                v-for="(feat, index) in sub.features"
                :key="index"
                class="flex items-start gap-2 text-xs"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-0.5 shrink-0 text-[#8dc707]"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="text-black/60">{{ feat.description }}</span>
              </div>
            </div>
          </div>
          <button
            @click="updateMembership(sub.id)"
            :class="
              sub.name === 'Senior Plan' ? 'bg-[#8dc707] text-black' : 'bg-black text-[#8dc707]'
            "
            class="w-full py-2.5 rounded text-sm font-black transition-colors hover:opacity-80"
          >
            Get {{ sub.name }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="bg-black/[0.04] rounded p-5 text-center text-sm text-black/50 border border-black/[0.08]"
    >
      All plans include free cancellation up to 24 hours before your booking · No setup fees ·
      Cancel anytime
    </div>
  </div>
  <v-snackbar v-model="showSnackbar" timeout="3000" location="top" :color="snackbarColor">
    <div class="flex items-center justify-center w-full text-center">
      {{ snackbarText }}
    </div>
  </v-snackbar>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import api from '../api/axios'

export default {
  name: 'SubscriptionsView',
  data() {
    return {
      loading: false,
      error: null,
      subscriptions: [],
      user: null,
      showSnackbar: false,
      snackbarColor: 'success',
      snackbarText: '',
    }
  },
  methods: {
    async updateMembership(id) {
      const authStore = useAuthStore()

      if (!authStore.user?.id) {
        this.snackbarColor = 'error'
        this.snackbarText = 'Unauthenticated'
        this.showSnackbar = true
        return
      }

      this.user = authStore.user.id
      this.loading = true

      try {
        const response = await api.patch(`/users/${this.user}`, {
          membership_id: id,
        })

        this.snackbarColor = 'success'
        this.snackbarText = response?.data?.message || 'Membership updated successfully'
        this.showSnackbar = true
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message || 'An error occurred'

        this.error = errorMessage
        this.snackbarColor = 'error'
        this.snackbarText = errorMessage
        this.showSnackbar = true
      } finally {
        this.loading = false
      }
    },
  },
  async created() {
    this.loading = true
    try {
      const response = await api.get('/memberships')
      this.subscriptions = response?.data?.data || []
    } catch (err) {
      this.error = err.response?.data?.message || err.message
    } finally {
      this.loading = false
    }
  },
}
</script>

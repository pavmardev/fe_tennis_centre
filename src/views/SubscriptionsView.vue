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

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <div
        v-for="sub in subscriptions"
        :class="'border-' + isSenior(sub.plate)"
        class="rounded border-2 overflow-hidden transition-colors hover:border-[#8dc707]/50"
      >
        <div
          v-if="senior"
          class="bg-[#8dc707] text-black text-[10px] font-black tracking-widest uppercase text-center py-1.5"
        >
          Most Popular
        </div>
        <div class="p-5 bg-white h-full flex flex-col justify-between">
          <div>
            <div class="text-sm font-bold text-black/40 mb-1">{{ sub.plate }}</div>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="font-black text-black text-4xl">${{ sub.cost }}</span>
              <span class="text-xs text-black/40">/month</span>
            </div>
            <div class="text-xs font-bold text-[#8dc707] mb-4">
              {{ sub.bookingsPerMonth ?? 'Unlimited' }} bookings/mo
            </div>

            <div class="space-y-2 mb-5">
              <div v-for="feat in sub.features" class="flex items-start gap-2 text-xs">
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
                <span class="text-black/60">{{ feat }}</span>
              </div>
            </div>
          </div>
          <button
            :class="'bg-' + buttonColor()[1] + ' text-' + buttonColor()[0]"
            class="w-full py-2.5 rounded text-sm font-black transition-colorstext-[#8dc707] hover:opacity-80"
          >
            Get {{ sub.plate }}
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
</template>

<script>
export default {
  name: 'SubscriptionsView',
  data() {
    return {
      subscriptions: [
        {
          plate: 'Bronze Plan',
          cost: 29,
          bookingsPerMonth: 4,
          features: ['Access to all court types', '3 days advanced booking window'],
        },
        {
          plate: 'Silver Plan',
          cost: 49,
          bookingsPerMonth: 8,
          features: [
            'Access to all court types',
            '7 days advanced booking window',
            '10% discount on racket rentals',
          ],
        },
        {
          plate: 'Senior Plan',
          cost: 69,
          bookingsPerMonth: 12,
          features: [
            'Access to all court types',
            '14 days advanced booking window',
            'Free locker room access',
            'Guest passes included (2/mo)',
          ],
        },
        {
          plate: 'Gold Plan',
          cost: 99,
          bookingsPerMonth: null,
          features: [
            'Unlimited court bookings',
            '30 days advanced booking window',
            'Free rackets & balls rental',
            'Priority lounge & sauna access',
          ],
        },
      ],
      senior: false,
    }
  },
  methods: {
    isSenior(plan) {
      if (plan == 'Senior Plan') {
        this.senior = true
        return '[#8dc707]'
      } else {
        this.senior = false
        return 'black/10'
      }
    },
    buttonColor() {
      if (!this.senior) {
        return ['[#8dc707]', 'black']
      } else {
        return ['black', '[#8dc707]']
      }
    },
  },
}
</script>

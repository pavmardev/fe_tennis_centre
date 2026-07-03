<template>
  <body class="bg-gray-50 text-black antialiased">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div class="text-center mb-10">
        <span class="text-[#8dc707] font-bold text-xs tracking-widest uppercase"
          >Season Tickets</span
        >
        <h1 class="font-black text-black text-4xl mt-1 mb-3">Membership Plans</h1>
        <p class="text-black/50 max-w-xl mx-auto mb-6 text-sm">
          Credit-based season tickets. Bookings deduct from your balance automatically — no
          per-session invoices, no friction.
        </p>

        <div class="inline-flex items-center bg-black/5 rounded p-1 gap-1">
          <button
            class="px-4 py-1.5 rounded text-sm font-bold capitalize transition-colors bg-[#8dc707] text-black"
          >
            monthly
          </button>
          <button
            class="px-4 py-1.5 rounded text-sm font-bold capitalize transition-colors text-black/50 hover:text-black"
          >
            annual
            <span class="text-[0.65rem] ml-1 opacity-60">save 20%</span>
          </button>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div
          class="rounded border-2 overflow-hidden transition-colors border-black/10 hover:border-[#8dc707]/50"
        >
          <div class="p-5 bg-white h-full flex flex-col justify-between">
            <div>
              <div class="text-sm font-bold text-black/40 mb-1">Bronze Plan</div>
              <div class="flex items-baseline gap-1 mb-1">
                <span class="font-black text-black text-4xl">$29</span>
                <span class="text-xs text-black/40">/month</span>
              </div>
              <div class="text-xs font-bold text-[#8dc707] mb-4">4 bookings/mo</div>

              <div class="space-y-2 mb-5">
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Access to all court types</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">3 days advanced booking window</span>
                </div>
              </div>
            </div>
            <button
              class="w-full py-2.5 rounded text-sm font-black transition-colors bg-black text-[#8dc707] hover:opacity-80"
            >
              Get Bronze Plan
            </button>
          </div>
        </div>

        <div
          class="rounded border-2 overflow-hidden transition-colors border-black/10 hover:border-[#8dc707]/50"
        >
          <div class="p-5 bg-white h-full flex flex-col justify-between">
            <div>
              <div class="text-sm font-bold text-black/40 mb-1">Silver Plan</div>
              <div class="flex items-baseline gap-1 mb-1">
                <span class="font-black text-black text-4xl">$49</span>
                <span class="text-xs text-black/40">/month</span>
              </div>
              <div class="text-xs font-bold text-[#8dc707] mb-4">8 bookings/mo</div>

              <div class="space-y-2 mb-5">
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Access to all court types</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">7 days advanced booking window</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">10% discount on racket rentals</span>
                </div>
              </div>
            </div>
            <button
              class="w-full py-2.5 rounded text-sm font-black transition-colors bg-black text-[#8dc707] hover:opacity-80"
            >
              Get Silver Plan
            </button>
          </div>
        </div>

        <div class="rounded border-2 overflow-hidden transition-colors border-[#8dc707]">
          <div
            class="bg-[#8dc707] text-black text-[10px] font-black tracking-widest uppercase text-center py-1.5"
          >
            Most Popular
          </div>
          <div class="p-5 bg-white h-full flex flex-col justify-between">
            <div>
              <div class="text-sm font-bold text-black/40 mb-1">Senior Plan</div>
              <div class="flex items-baseline gap-1 mb-1">
                <span class="font-black text-black text-4xl">$69</span>
                <span class="text-xs text-black/40">/month</span>
              </div>
              <div class="text-xs font-bold text-[#8dc707] mb-4">12 bookings/mo</div>

              <div class="space-y-2 mb-5">
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Access to all court types</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">14 days advanced booking window</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Free locker room access</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Guest passes included (2/mo)</span>
                </div>
              </div>
            </div>
            <button
              class="w-full py-2.5 rounded text-sm font-black transition-colors bg-[#8dc707] text-black hover:bg-[#9fd608]"
            >
              Get Senior Plan
            </button>
          </div>
        </div>

        <div
          class="rounded border-2 overflow-hidden transition-colors border-black/10 hover:border-[#8dc707]/50"
        >
          <div class="p-5 bg-white h-full flex flex-col justify-between">
            <div>
              <div class="text-sm font-bold text-black/40 mb-1">Gold Plan</div>
              <div class="flex items-baseline gap-1 mb-1">
                <span class="font-black text-black text-4xl">$99</span>
                <span class="text-xs text-black/40">/month</span>
              </div>
              <div class="text-xs font-bold text-[#8dc707] mb-4">Unlimited bookings</div>

              <div class="space-y-2 mb-5">
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Unlimited court bookings</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">30 days advanced booking window</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Free rackets & balls rental</span>
                </div>
                <div class="flex items-start gap-2 text-xs">
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
                  <span class="text-black/60">Priority lounge & sauna access</span>
                </div>
              </div>
            </div>
            <button
              class="w-full py-2.5 rounded text-sm font-black transition-colors bg-black text-[#8dc707] hover:opacity-80"
            >
              Get Gold Plan
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
  </body>
</template>

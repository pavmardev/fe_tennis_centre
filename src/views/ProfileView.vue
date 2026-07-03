<template>
  <body class="bg-gray-50 text-black antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 class="font-black text-black text-3xl mb-8">My Profile</h1>

      <div class="grid sm:grid-cols-3 gap-6">
        <div class="sm:col-span-1">
          <div class="bg-white border border-black/10 rounded p-5 text-center">
            <div class="relative inline-block mb-4">
              <div
                class="w-20 h-20 rounded-full bg-black flex items-center justify-center text-2xl text-[#8dc707] font-black mx-auto"
              >
                ML
              </div>
              <button
                class="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#8dc707] flex items-center justify-center border-2 border-white shadow-sm hover:scale-105 transition-transform"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-black"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
              </button>
            </div>
            <h2 class="font-black text-black mb-0.5">Marcus Lindqvist</h2>
            <p class="text-black/40 text-xs mb-3">m.lindqvist@email.com</p>

            <div
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8dc707]/15 rounded text-xs font-bold text-[#5a8000]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              Senior Member
            </div>
          </div>
        </div>

        <div class="sm:col-span-2 space-y-4">
          <div class="bg-white border border-black/10 rounded p-5">
            <h3 class="font-black text-black mb-4">Personal Details</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs text-black/40 mb-1 font-bold">First Name</label>
                <div class="px-3 py-2.5 bg-black/[0.04] rounded text-sm text-black font-medium">
                  Marcus
                </div>
              </div>

              <div>
                <label class="block text-xs text-black/40 mb-1 font-bold">Last Name</label>
                <div class="px-3 py-2.5 bg-black/[0.04] rounded text-sm text-black font-medium">
                  Lindqvist
                </div>
              </div>

              <div>
                <label class="block text-xs text-black/40 mb-1 font-bold">Phone</label>
                <div class="px-3 py-2.5 bg-black/[0.04] rounded text-sm text-black font-medium">
                  +46 70 234 5678
                </div>
              </div>

              <div>
                <label class="block text-xs text-black/40 mb-1 font-bold">Member Since</label>
                <div class="px-3 py-2.5 bg-black/[0.04] rounded text-sm text-black font-medium">
                  March 2024
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-black/10 rounded p-5">
            <h3 class="font-black text-black mb-3">Active Subscription</h3>

            <div class="flex items-center justify-between p-4 bg-black rounded mb-3">
              <div>
                <div class="text-[#8dc707] font-black">Senior Plan</div>
                <div class="text-white/40 text-xs">7 of 12 bookings used · Renews Jul 23</div>
              </div>
              <div class="text-right">
                <div class="text-white font-black text-xl">$69</div>
                <div class="text-white/30 text-xs">/month</div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs text-black/40 mb-1.5">
                <span>Credits used</span>
                <span>7 / 12</span>
              </div>
              <div class="h-2 bg-black/[0.08] rounded-full overflow-hidden">
                <div class="h-full bg-[#8dc707] rounded-full" style="width: 58%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

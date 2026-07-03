<template>
  <body class="bg-gray-50 text-black py-10">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="font-black text-black text-3xl">Book a Court</h1>
          <p class="text-black/50 text-sm mt-1">
            Pick a surface, choose a date and grab your slot.
          </p>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <button
            class="px-4 py-2 rounded text-xs font-bold capitalize transition-colors bg-[#8dc707] text-black"
          >
            all
          </button>
          <button
            class="px-4 py-2 rounded text-xs font-bold capitalize transition-colors bg-white text-black/60 border border-black/[0.12] hover:border-[#8dc707]/50"
          >
            clay
          </button>
          <button
            class="px-4 py-2 rounded text-xs font-bold capitalize transition-colors bg-white text-black/60 border border-black/[0.12] hover:border-[#8dc707]/50"
          >
            grass
          </button>
          <button
            class="px-4 py-2 rounded text-xs font-bold capitalize transition-colors bg-white text-black/60 border border-black/[0.12] hover:border-[#8dc707]/50"
          >
            indoor
          </button>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          class="group text-left bg-white border border-black/10 rounded overflow-hidden hover:border-[#8dc707] hover:shadow-lg transition-all cursor-pointer"
        >
          <div class="relative h-48 bg-black/10">
            <div
              class="w-full h-full bg-slate-700 flex items-center justify-center text-white/20 font-bold"
            >
              Court Image
            </div>
            <div class="absolute top-3 left-3">
              <span
                class="bg-amber-700 text-white text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded shadow"
                >Clay</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-1">
              <h3 class="font-black text-black text-lg">Central Court 1</h3>
              <div class="text-right shrink-0 ml-2">
                <span class="font-black text-black">$30</span>
                <span class="text-black/40 text-xs">/hr</span>
              </div>
            </div>
            <p class="text-black/50 text-xs leading-relaxed mb-3">
              Premium red clay court with excellent water drainage and professional lighting.
            </p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-black/40">Evening: $40/hr</span>
              <span
                class="flex items-center gap-1 text-black font-bold group-hover:text-[#8dc707] transition-colors"
              >
                Select
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div
          class="group text-left bg-white border border-black/10 rounded overflow-hidden hover:border-[#8dc707] hover:shadow-lg transition-all cursor-pointer"
        >
          <div class="relative h-48 bg-black/10">
            <div
              class="w-full h-full bg-emerald-800 flex items-center justify-center text-white/20 font-bold"
            >
              Court Image
            </div>
            <div class="absolute top-3 left-3">
              <span
                class="bg-blue-600 text-white text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded shadow"
                >Hardcourt</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-1">
              <h3 class="font-black text-black text-lg">Indoor Arena 2</h3>
              <div class="text-right shrink-0 ml-2">
                <span class="font-black text-black">$35</span>
                <span class="text-black/40 text-xs">/hr</span>
              </div>
            </div>
            <p class="text-black/50 text-xs leading-relaxed mb-3">
              Climate-controlled indoor hardcourt perfect for consistent all-weather play.
            </p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-black/40">Evening: $45/hr</span>
              <span
                class="flex items-center gap-1 text-black font-bold group-hover:text-[#8dc707] transition-colors"
              >
                Select
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="border-black/10 my-10 max-w-7xl mx-auto" />

    <section class="max-w-2xl mx-auto px-4 mb-20">
      <button
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
      </button>

      <div class="flex items-center gap-4 mb-8">
        <div class="w-16 h-16 rounded overflow-hidden bg-black/10 shrink-0">
          <div
            class="w-full h-full bg-slate-700 flex items-center justify-center text-white/10 text-xs font-bold"
          >
            Court
          </div>
        </div>
        <div>
          <h2 class="font-black text-black text-2xl">Central Court 1</h2>
          <div class="flex items-center gap-2 mt-1">
            <span
              class="bg-amber-700 text-white text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded"
              >Clay</span
            >
            <span class="text-black/40 text-xs">$30/hr · $40/hr eve.</span>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-bold text-black/60 mb-2">Select Date</label>
        <input
          type="date"
          value="2026-06-23"
          min="2026-06-23"
          class="px-4 py-2.5 rounded border border-black/[0.15] bg-white text-black text-sm focus:outline-none focus:border-[#8dc707] focus:ring-2 focus:ring-[#8dc707]/20"
        />
      </div>

      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-black text-black">Available Slots</h3>
          <div class="flex items-center gap-3 text-xs text-black/40">
            <span class="flex items-center gap-1"
              ><span
                class="w-2.5 h-2.5 rounded bg-black/5 border border-black/5 inline-block"
              ></span
              >Taken</span
            >
            <span class="flex items-center gap-1"
              ><span class="w-2.5 h-2.5 rounded bg-white border border-black/20 inline-block"></span
              >Free</span
            >
          </div>
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-7 gap-2">
          <button
            disabled
            class="py-2.5 rounded text-xs font-bold bg-black/5 text-black/25 cursor-not-allowed border border-transparent"
          >
            08:00
          </button>
          <button
            disabled
            class="py-2.5 rounded text-xs font-bold bg-black/5 text-black/25 cursor-not-allowed border border-transparent"
          >
            09:00
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-white text-black border border-black/[0.12] hover:border-[#8dc707]"
          >
            10:00
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-white text-black border border-black/[0.12] hover:border-[#8dc707]"
          >
            11:00
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-[#8dc707] text-black border border-[#8dc707]"
          >
            12:00
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-white text-black border border-black/[0.12] hover:border-[#8dc707]"
          >
            13:00
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-white text-black border border-black/[0.12] hover:border-[#8dc707]"
          >
            14:00
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-white text-black border border-black/20 hover:border-[#8dc707]"
          >
            18:00
            <div class="text-[9px] opacity-50 mt-0.5">eve</div>
          </button>
          <button
            class="py-2.5 rounded text-xs font-bold bg-white text-black border border-black/20 hover:border-[#8dc707]"
          >
            19:00
            <div class="text-[9px] opacity-50 mt-0.5">eve</div>
          </button>
        </div>
      </div>

      <button
        class="w-full py-3.5 bg-black text-[#8dc707] font-black rounded hover:opacity-80 transition-opacity"
      >
        Continue with 12:00 →
      </button>
    </section>

    <hr class="border-black/10 my-10 max-w-7xl mx-auto" />

    <section class="max-w-lg mx-auto px-4 mb-20">
      <button
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
      </button>
      <h2 class="font-black text-black text-2xl mb-6">Confirm Booking</h2>

      <div class="bg-white border border-black/10 rounded overflow-hidden mb-4 shadow-sm">
        <div
          class="h-36 bg-slate-700 flex items-center justify-center text-white/10 font-bold relative"
        >
          Court Preview
        </div>
        <div class="p-4">
          <div class="mb-3">
            <h3 class="font-black text-black text-lg">Central Court 1</h3>
            <span
              class="bg-amber-700 text-white text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded inline-block mt-1"
              >Clay</span
            >
          </div>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="bg-black/[0.04] rounded p-3">
              <div class="text-black/40 text-xs mb-0.5">Date</div>
              <div class="font-bold text-black">2026-06-23</div>
            </div>
            <div class="bg-black/[0.04] rounded p-3">
              <div class="text-black/40 text-xs mb-0.5">Time</div>
              <div class="font-bold text-black">12:00 – 13:00</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-black/10 rounded p-5 mb-4 shadow-sm">
        <h4 class="font-black text-black mb-3">Add Equipment Rental</h4>
        <div class="space-y-2">
          <button
            class="w-full flex items-center justify-between p-3 rounded border-2 border-black/[0.08] hover:border-[#8dc707]/50 transition-colors bg-white"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-xl">🎾</span>
              <div class="text-left">
                <div class="text-sm font-bold text-black">Tennis Racket</div>
                <div class="text-xs text-black/40">$5/match</div>
              </div>
            </div>
            <div
              class="w-5 h-5 rounded border-2 border-black/20 flex items-center justify-center"
            ></div>
          </button>

          <button
            class="w-full flex items-center justify-between p-3 rounded border-2 border-[#8dc707] bg-[#8dc707]/5 transition-colors"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-xl">🟡</span>
              <div class="text-left">
                <div class="text-sm font-bold text-black">Can of 4 Balls</div>
                <div class="text-xs text-black/40">$3/can</div>
              </div>
            </div>
            <div
              class="w-5 h-5 rounded border-2 border-[#8dc707] bg-[#8dc707] flex items-center justify-center"
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
            <span class="text-black/50">Court (day)</span>
            <span class="font-bold text-black">$30</span>
          </div>
          <div class="flex justify-between">
            <span class="text-black/50">Can of 4 Balls</span>
            <span class="font-bold text-black">$3</span>
          </div>
          <div
            class="border-t border-black/[0.08] pt-2 mt-2 flex justify-between font-black text-black text-base"
          >
            <span>Total</span><span>$33</span>
          </div>
        </div>
      </div>

      <button
        class="w-full py-3.5 bg-[#8dc707] text-black font-black rounded hover:bg-[#9fd608] transition-colors shadow-sm"
      >
        Confirm & Pay $33
      </button>
      <p class="text-center text-xs text-black/40 mt-3">Free cancellation up to 24h before</p>
    </section>

    <hr class="border-black/10 my-10 max-w-7xl mx-auto" />

    <section class="max-w-lg mx-auto px-4 py-10 text-center">
      <div
        class="w-16 h-16 rounded-full bg-[#8dc707] flex items-center justify-center mx-auto mb-6 shadow-sm"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h2 class="font-black text-black text-3xl mb-2">Booking Confirmed!</h2>
      <p class="text-black/50 mb-2">Central Court 1 · 2026-06-23 at 12:00</p>
      <p class="text-black/40 text-sm mb-8">Confirmation sent to m.lindqvist@email.com</p>

      <div class="bg-white border border-black/10 rounded p-5 text-left mb-6 shadow-sm">
        <div class="flex justify-between text-sm mb-2">
          <span class="text-black/50">Court fee</span>
          <span class="font-bold text-black">$30</span>
        </div>
        <div class="flex justify-between text-sm mb-2">
          <span class="text-black/50">Equipment</span>
          <span class="font-bold text-black">$3</span>
        </div>
        <div
          class="border-t border-black/[0.08] mt-3 pt-3 flex justify-between font-black text-black text-base"
        >
          <span>Total</span>
          <span>$33</span>
        </div>
      </div>

      <button
        class="px-6 py-3 bg-black text-[#8dc707] font-black rounded hover:opacity-80 transition-opacity shadow-md"
      >
        Book Another Court
      </button>
    </section>
  </body>
</template>

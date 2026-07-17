<template>
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

    <div v-if="findCourt" class="flex items-center gap-4 mb-8">
      <div class="w-16 h-16 rounded overflow-hidden bg-black/10 shrink-0">
        <div
          class="w-full h-full bg-slate-700 flex items-center justify-center text-white/10 text-xs font-bold"
        >
          Court
        </div>
      </div>
      <div>
        <h2 class="font-black text-black text-2xl">{{ findCourt.name }}</h2>
        <div class="flex items-center gap-2 mt-1">
          <span
            class="bg-black text-white text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded"
            >{{ findCourt.surface }}</span
          >
          <span class="text-black/40 text-xs"
            >${{ findCourt.normalCost }}/hr · ${{ findCourt.eveningCost }}/hr eve.</span
          >
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
            ><span class="w-2.5 h-2.5 rounded bg-black/5 border border-black/5 inline-block"></span
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
</template>

<script>
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
      courtDetails: [
        {
          id: 1,
          surface: 'Clay',
          name: 'Central Court 1',
          description:
            'Premium red clay court with excellent water drainage and professional lighting.',
          normalCost: 30,
          eveningCost: 40,
        },
        {
          id: 2,
          surface: 'Indoor',
          name: 'Indoor Arena 2',
          description:
            'Climate-controlled indoor hardcourt perfect for consistent all-weather play.',
          normalCost: 35,
          eveningCost: 45,
        },
      ],
    }
  },
  computed: {
    findCourt() {
      return this.courtDetails.find((c) => c.id.toString() == this.id)
    },
  },
}
</script>

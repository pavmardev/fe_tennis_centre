<template>
  <body class="bg-gray-50">
    <header class="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2.5 no-underline">
          <div class="w-9 h-9 bg-black flex items-center justify-center rounded">
            <span class="text-[#8dc707] font-black text-base">A</span>
          </div>
          <span class="font-black text-black tracking-tight text-lg hidden sm:block">
            <RouterLink :to="{ name: 'home' }"> AceReserve </RouterLink>
          </span>
        </a>

        <nav class="hidden md:flex items-center gap-0.5">
          <div v-for="page in pages">
            <RouterLink
              :to="{ name: page[1] }"
              href="#"
              class="px-4 py-2 rounded text-sm font-medium transition-colors text-black/70 hover:bg-black/5 hover:text-black no-underline"
              @click="selectedPage"
              :class="backgroundGreen"
            >
              {{ page[0] }}
            </RouterLink>
          </div>
        </nav>

        <div class="flex items-center gap-2">
          <button
            class="hidden sm:flex w-9 h-9 items-center justify-center rounded hover:bg-black/5 text-black/60 relative transition-colors cursor-pointer"
          >
            <i data-lucide="bell" class="w-[18px] h-[18px]"></i>
            <span
              class="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8dc707] rounded-full border-2 border-white"
            ></span>
          </button>

          <button
            class="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-black/5 transition-colors cursor-pointer"
          >
            <div
              class="w-7 h-7 rounded-full bg-black flex items-center justify-center text-xs text-[#8dc707] font-bold"
            >
              ML
            </div>
            <i data-lucide="chevron-down" class="w-[13px] h-[13px] text-black/40"></i>
          </button>

          <button
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-[#8dc707] rounded text-xs font-black tracking-wide transition-opacity hover:opacity-80 cursor-pointer"
          >
            <i data-lucide="shield" class="w-[11px] h-[11px]"></i> Admin
          </button>

          <button
            id="mobile-menu-btn"
            class="md:hidden w-9 h-9 flex items-center justify-center rounded hover:bg-black/5 transition-colors cursor-pointer"
          >
            <i data-lucide="menu" class="w-[18px] h-[18px]"></i>
          </button>
        </div>
      </div>
    </header>
  </body>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      pages: [
        ['Home', 'home'],
        ['Book a Court', 'courts'],
        ['My Bookings', 'reservations'],
        ['Memberships', 'subscriptions'],
      ],
      backgroundGreen: null,
    }
  },
  methods: {
    selectedPage() {
      if (!this.backgroundGreen) {
        this.backgroundGreen = 'bg-[#8dc707]'
      } else {
        this.backgroundGreen = ''
      }
    },
  },
}
</script>

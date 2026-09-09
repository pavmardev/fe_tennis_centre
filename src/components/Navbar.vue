<template>
  <header class="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2.5 no-underline">
        <div class="w-9 h-9 bg-black flex items-center justify-center rounded">
          <span class="text-[#8dc707] font-black text-base">A</span>
        </div>
        <span class="font-black text-black tracking-tight text-lg hidden sm:block">
          AceReserve
        </span>
      </RouterLink>

      <!-- Navigácia -->
      <nav class="hidden md:flex items-center gap-0.5">
        <div v-for="pageItem in pages" :key="pageItem[1]">
          <RouterLink
            :to="{ name: pageItem[1] }"
            class="px-4 py-2 rounded text-sm font-medium transition-colors text-black/70 hover:bg-black/5 hover:text-black no-underline"
            :class="backgroundGreen(pageItem[1])"
          >
            {{ pageItem[0] }}
          </RouterLink>
        </div>
      </nav>

      <!-- Pravá časť pre prihláseného používateľa -->
      <div v-if="authStore.isAuthenticated && authStore.user" class="flex items-center gap-2">
        <RouterLink
          :to="{ name: 'profile' }"
          class="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-black/5 transition-colors cursor-pointer"
        >
          <h3
            class="w-30 h-10 rounded bg-black flex items-center justify-center text-xs text-[#8dc707] font-black"
          >
            {{ authStore.user.name }}
          </h3>
        </RouterLink>

        <button
          @click="handleLogout"
          class="hidden sm:inline-flex items-center gap-1.5 px-4 py-3 bg-black text-[#8dc707] rounded text-xs font-black tracking-wide transition-opacity hover:opacity-80 cursor-pointer"
        >
          Logout
        </button>
      </div>

      <!-- Pravá časť pre neprihláseného používateľa -->
      <div v-else class="flex items-center gap-2">
        <RouterLink
          :to="{ name: 'login' }"
          class="px-4 py-2 bg-black text-[#8dc707] rounded text-xs font-black tracking-wide hover:opacity-80 no-underline"
        >
          Login
        </RouterLink>
      </div>

      <!-- Mobilné menu tlačidlo -->
      <button
        id="mobile-menu-btn"
        class="md:hidden w-9 h-9 flex items-center justify-center rounded hover:bg-black/5 transition-colors cursor-pointer"
      >
        <i data-lucide="menu" class="w-[18px] h-[18px]"></i>
      </button>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { mapStores } from 'pinia'

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
    }
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async handleLogout() {
      await this.authStore.logout()
      this.$router.push({ name: 'login' })
    },
    backgroundGreen(pg) {
      if (this.$route && this.$route.name === pg) {
        return 'bg-[#8dc707]'
      }
      return ''
    },
  },
}
</script>

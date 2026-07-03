<template>
  <body class="bg-gray-50">
    <header class="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2.5 no-underline">
          <div class="w-9 h-9 bg-black flex items-center justify-center rounded">
            <span class="text-[#8dc707] font-black text-base">A</span>
          </div>
          <span class="font-black text-black tracking-tight text-lg hidden sm:block">
            AceReserve
          </span>
        </a>

        <nav class="hidden md:flex items-center gap-0.5">
          <a
            href="#"
            class="px-4 py-2 rounded text-sm font-medium transition-colors bg-[#8dc707] text-black no-underline"
          >
            Home
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded text-sm font-medium transition-colors text-black/70 hover:bg-black/5 hover:text-black no-underline"
          >
            Book a Court
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded text-sm font-medium transition-colors text-black/70 hover:bg-black/5 hover:text-black no-underline"
          >
            My Bookings
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded text-sm font-medium transition-colors text-black/70 hover:bg-black/5 hover:text-black no-underline"
          >
            Memberships
          </a>
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

      <div id="mobile-menu" class="hidden md:hidden border-t border-black/10 bg-white px-4 pb-4">
        <div class="pt-3 flex flex-col gap-1">
          <a
            href="#"
            class="px-4 py-2.5 rounded text-sm font-medium text-left bg-[#8dc707] text-black no-underline"
          >
            Home
          </a>
          <a
            href="#"
            class="px-4 py-2.5 rounded text-sm font-medium text-left text-black/70 hover:bg-black/5 no-underline"
          >
            Book a Court
          </a>
          <a
            href="#"
            class="px-4 py-2.5 rounded text-sm font-medium text-left text-black/70 hover:bg-black/5 no-underline"
          >
            My Bookings
          </a>
          <a
            href="#"
            class="px-4 py-2.5 rounded text-sm font-medium text-left text-black/70 hover:bg-black/5 no-underline"
          >
            Memberships
          </a>

          <button
            class="mt-2 flex items-center gap-2 px-4 py-2.5 bg-black text-[#8dc707] rounded text-sm font-black cursor-pointer"
          >
            <i data-lucide="shield" class="w-3.5 h-3.5"></i> Admin Mode
          </button>
        </div>
      </div>
    </header>
  </body>
</template>

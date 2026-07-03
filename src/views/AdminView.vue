<template>
  <body class="bg-gray-50 text-black">
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
        <div class="hidden sm:flex items-center gap-2">
          <button
            class="flex items-center gap-1.5 px-3 py-2 bg-white border border-black/12 rounded text-sm text-black/60 hover:border-[#8dc707]/50 transition-colors font-medium shadow-sm"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
            Refresh
          </button>
          <button
            class="flex items-center gap-1.5 px-3 py-2 bg-[#8dc707] rounded text-sm text-black font-black hover:bg-[#9fd608] transition-colors shadow-sm"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Court
          </button>
        </div>
      </div>

      <div class="flex gap-0 mb-7 border-b border-black/10">
        <button
          class="px-4 py-2.5 text-sm font-bold capitalize border-b-2 -mb-px transition-colors border-[#8dc707] text-black"
        >
          overview
        </button>
        <button
          class="px-4 py-2.5 text-sm font-bold capitalize border-b-2 -mb-px transition-colors border-transparent text-black/40 hover:text-black"
        >
          reservations
        </button>
        <button
          class="px-4 py-2.5 text-sm font-bold capitalize border-b-2 -mb-px transition-colors border-transparent text-black/40 hover:text-black"
        >
          courts
        </button>
      </div>

      <section class="mb-12">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div class="bg-white border border-black/10 rounded p-4 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-black/40 font-bold uppercase tracking-wider"
                >Weekly Revenue</span
              >
              <div
                class="w-8 h-8 rounded bg-[#8dc707]/15 flex items-center justify-center text-[#5a8000]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
            </div>
            <div class="font-black text-black text-2xl mb-1">$14,250</div>
            <span class="text-xs font-bold text-[#5a8000]">+12% vs last week</span>
          </div>

          <div class="bg-white border border-black/10 rounded p-4 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-black/40 font-bold uppercase tracking-wider"
                >Bookings (7d)</span
              >
              <div
                class="w-8 h-8 rounded bg-[#8dc707]/15 flex items-center justify-center text-[#5a8000]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>
            <div class="font-black text-black text-2xl mb-1">328</div>
            <span class="text-xs font-bold text-[#5a8000]">+8% vs last week</span>
          </div>

          <div class="bg-white border border-black/10 rounded p-4 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-black/40 font-bold uppercase tracking-wider"
                >Active Members</span
              >
              <div
                class="w-8 h-8 rounded bg-[#8dc707]/15 flex items-center justify-center text-[#5a8000]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <div class="font-black text-black text-2xl mb-1">1,247</div>
            <span class="text-xs font-bold text-[#5a8000]">+3% vs last week</span>
          </div>

          <div class="bg-white border border-black/10 rounded p-4 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-black/40 font-bold uppercase tracking-wider"
                >Avg Occupancy</span
              >
              <div
                class="w-8 h-8 rounded bg-[#8dc707]/15 flex items-center justify-center text-[#5a8000]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
            </div>
            <div class="font-black text-black text-2xl mb-1">73%</div>
            <span class="text-xs font-bold text-red-500">-2% vs last week</span>
          </div>
        </div>

        <div class="grid lg:grid-cols-5 gap-5">
          <div class="lg:col-span-3 bg-white border border-black/10 rounded p-5 shadow-sm">
            <h3 class="font-black text-black mb-4">Weekly Revenue</h3>
            <div
              class="h-[200px] w-full flex items-end relative border-b border-l border-gray-100 pl-2"
            >
              <div
                class="absolute inset-0 bottom-0 left-2 right-0 bg-gradient-to-t from-[#8dc707]/0 to-[#8dc707]/20 clip-path-mock"
                style="
                  clip-path: polygon(
                    0% 80%,
                    20% 60%,
                    40% 45%,
                    60% 50%,
                    80% 20%,
                    100% 10%,
                    100% 100%,
                    0% 100%
                  );
                "
              ></div>
              <svg
                class="absolute inset-0 left-2 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,80 20,60 40,45 60,50 80,20 100,10"
                  fill="none"
                  stroke="#8dc707"
                  stroke-width="2"
                />
              </svg>
              <div
                class="absolute -bottom-6 left-2 right-0 flex justify-between text-[11px] text-gray-400 font-mono"
              >
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span
                ><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 bg-white border border-black/10 rounded p-5 shadow-sm">
            <h3 class="font-black text-black mb-4">Court Occupancy %</h3>
            <div
              class="h-[180px] w-full flex items-end justify-between gap-3 px-2 border-b border-gray-100"
            >
              <div class="flex-1 flex items-end justify-center gap-1 h-full">
                <div class="w-full bg-black rounded-t" style="height: 65%"></div>
                <div class="w-full bg-[#8dc707] rounded-t" style="height: 85%"></div>
              </div>
              <div class="flex-1 flex items-end justify-center gap-1 h-full">
                <div class="w-full bg-black rounded-t" style="height: 45%"></div>
                <div class="w-full bg-[#8dc707] rounded-t" style="height: 70%"></div>
              </div>
              <div class="flex-1 flex items-end justify-center gap-1 h-full">
                <div class="w-full bg-black rounded-t" style="height: 80%"></div>
                <div class="w-full bg-[#8dc707] rounded-t" style="height: 95%"></div>
              </div>
            </div>
            <div class="flex justify-between text-[10px] text-gray-400 font-mono mt-1 px-2">
              <span class="flex-1 text-center">Court 1</span>
              <span class="flex-1 text-center">Court 2</span>
              <span class="flex-1 text-center">Court 3</span>
            </div>
            <div class="flex items-center gap-3 mt-4">
              <span class="flex items-center gap-1.5 text-xs text-black/50">
                <span class="w-2.5 h-2.5 rounded-sm bg-black inline-block"></span>Daytime
              </span>
              <span class="flex items-center gap-1.5 text-xs text-black/50">
                <span class="w-2.5 h-2.5 rounded-sm bg-[#8dc707] inline-block"></span>Evening
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-black text-black text-xl">All Reservations</h2>
          <div class="relative hidden sm:block">
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              placeholder="Search player or court…"
              class="pl-8 pr-4 py-2 bg-white border border-black/12 rounded text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#8dc707] w-52"
            />
          </div>
        </div>

        <div class="bg-white border border-black/10 rounded overflow-hidden shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-black/8 bg-black/[0.03]">
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    Player
                  </th>
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    Court
                  </th>
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    Date & Time
                  </th>
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    class="text-left px-4 py-3 text-xs font-black text-black/40 whitespace-nowrap uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-black/5 hover:bg-black/[0.02] transition-colors">
                  <td class="px-4 py-3.5 text-xs text-black/30 font-mono">#RES-8942</td>
                  <td class="px-4 py-3.5">
                    <div class="flex items-center gap-2">
                      <div
                        class="w-7 h-7 rounded-full bg-black flex items-center justify-center text-[10px] text-[#8dc707] shrink-0 font-black"
                      >
                        JD
                      </div>
                      <span class="font-bold text-black whitespace-nowrap">John Doe</span>
                    </div>
                  </td>
                  <td class="px-4 py-3.5 text-black/60 whitespace-nowrap">Central Court 1</td>
                  <td class="px-4 py-3.5 text-black/60 whitespace-nowrap">Today · 14:00 - 15:30</td>
                  <td class="px-4 py-3.5">
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800"
                      >Confirmed</span
                    >
                  </td>
                  <td class="px-4 py-3.5 font-black text-black">$45</td>
                  <td class="px-4 py-3.5">
                    <div class="flex items-center gap-1">
                      <button
                        class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      <button
                        class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                        >
                          <path
                            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                        </svg>
                      </button>
                      <button
                        class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-red-500 transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr class="border-0 hover:bg-black/[0.02] transition-colors">
                  <td class="px-4 py-3.5 text-xs text-black/30 font-mono">#RES-8943</td>
                  <td class="px-4 py-3.5">
                    <div class="flex items-center gap-2">
                      <div
                        class="w-7 h-7 rounded-full bg-black flex items-center justify-center text-[10px] text-[#8dc707] shrink-0 font-black"
                      >
                        AS
                      </div>
                      <span class="font-bold text-black whitespace-nowrap">Anna Smith</span>
                    </div>
                  </td>
                  <td class="px-4 py-3.5 text-black/60 whitespace-nowrap">Clay Court 2</td>
                  <td class="px-4 py-3.5 text-black/60 whitespace-nowrap">
                    Tomorrow · 09:00 - 10:00
                  </td>
                  <td class="px-4 py-3.5">
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800"
                      >Pending</span
                    >
                  </td>
                  <td class="px-4 py-3.5 font-black text-black">$30</td>
                  <td class="px-4 py-3.5">
                    <div class="flex items-center gap-1">
                      <button
                        class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      <button
                        class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                        >
                          <path
                            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                        </svg>
                      </button>
                      <button
                        class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-red-500 transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white border border-black/10 rounded overflow-hidden shadow-sm">
          <div class="relative h-36 bg-black/10">
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
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-black text-black">Central Court 1</h3>
              <button
                class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                </svg>
              </button>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs mb-3">
              <div class="bg-black/[0.04] rounded p-2">
                <div class="text-black/40 mb-0.5">Day rate</div>
                <div class="font-black text-black">$30/hr</div>
              </div>
              <div class="bg-black/[0.04] rounded p-2">
                <div class="text-black/40 mb-0.5">Evening</div>
                <div class="font-black text-black">$40/hr</div>
              </div>
            </div>
            <div class="flex items-center justify-between text-xs text-black/40">
              <span>Outdoor</span>
              <span class="flex items-center gap-1 text-[#5a8000] font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#8dc707]"></span> Active
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white border border-black/10 rounded overflow-hidden shadow-sm">
          <div class="relative h-36 bg-black/10">
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
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-black text-black">Indoor Arena 2</h3>
              <button
                class="w-7 h-7 rounded hover:bg-black/5 flex items-center justify-center text-black/30 hover:text-black transition-colors"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                </svg>
              </button>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs mb-3">
              <div class="bg-black/[0.04] rounded p-2">
                <div class="text-black/40 mb-0.5">Day rate</div>
                <div class="font-black text-black">$35/hr</div>
              </div>
              <div class="bg-black/[0.04] rounded p-2">
                <div class="text-black/40 mb-0.5">Evening</div>
                <div class="font-black text-black">$45/hr</div>
              </div>
            </div>
            <div class="flex items-center justify-between text-xs text-black/40">
              <span>Climate-controlled</span>
              <span class="flex items-center gap-1 text-[#5a8000] font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#8dc707]"></span> Active
              </span>
            </div>
          </div>
        </div>

        <button
          class="border-2 border-dashed border-black/15 rounded p-6 flex flex-col items-center justify-center gap-2 text-black/30 hover:border-[#8dc707] hover:text-[#8dc707] transition-colors min-h-[200px] font-bold bg-white/50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span class="text-sm">Add New Court</span>
        </button>
      </section>
    </div>
  </body>
</template>

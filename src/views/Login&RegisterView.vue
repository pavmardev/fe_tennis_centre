<template>
  <div class="min-h-screen bg-gray-50 text-black antialiased flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div
          class="w-16 h-16 rounded-full bg-black flex items-center justify-center text-xl text-[#8dc707] font-black mx-auto mb-3"
        >
          TC
        </div>
        <h1 class="font-black text-black text-2xl">Vitajte späť</h1>
        <p class="text-black/55 text-sm mt-1">Prihláste sa do svojho účtu</p>
      </div>

      <div class="bg-white border border-black/10 rounded p-6 sm:p-8 shadow-sm">
        <div
          v-if="errorMessage"
          class="mb-5 p-3.5 bg-red-50 border border-red-200 rounded text-red-600 text-xs font-semibold flex items-center gap-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div v-if="$route.name == 'register'">
            <label
              for="name"
              class="block text-xs text-black/60 mb-1 font-bold uppercase tracking-wider"
            >
              Používateľské meno
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Peter Konečný"
              required
              class="w-full px-3 py-2.5 bg-black/[0.04] border border-transparent rounded text-sm text-black font-medium placeholder:text-black/30 focus:outline-none focus:border-black focus:bg-white transition-all"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-xs text-black/60 mb-1 font-bold uppercase tracking-wider"
            >
              E-mailová adresa
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="meno@domain.sk"
              class="w-full px-3 py-2.5 bg-black/[0.04] border border-transparent rounded text-sm text-black font-medium placeholder:text-black/30 focus:outline-none focus:border-black focus:bg-white transition-all"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label
                for="password"
                class="block text-xs text-black/60 font-bold uppercase tracking-wider"
              >
                Heslo
              </label>
              <a
                href="#"
                class="text-xs text-black/50 hover:text-black font-semibold transition-colors"
              >
                Zabudli ste heslo?
              </a>
            </div>

            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full px-3 py-2.5 bg-black/[0.04] border border-transparent rounded text-sm text-black font-medium placeholder:text-black/30 focus:outline-none focus:border-black focus:bg-white transition-all pr-10"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
              >
                <svg
                  v-if="!showPassword"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>

                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  ></path>
                  <path
                    d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                  ></path>
                  <line x1="2" y1="2" x2="22" y2="22"></line>
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-2 px-4 py-3 bg-black text-[#8dc707] text-sm font-bold rounded hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">Prihlásiť sa</span>
            <span v-else class="flex items-center gap-2">
              <svg
                class="animate-spin h-4 w-4 text-[#8dc707]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Prihlasovanie...
            </span>
            <svg
              v-if="!isLoading"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </form>
      </div>

      <div v-if="$route.name == 'login'" class="text-center mt-6 text-xs text-black/60 font-medium">
        Ešte nemáte účet?
        <RouterLink :to="{ name: 'register' }" class="text-black font-bold hover:underline ml-1">
          Vytvoriť registrácu
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      showPassword: false,
      isLoading: false,
      errorMessage: '',
    }
  },
  methods: {
    async handleLogin() {
      this.isLoading = true
      this.errorMessage = ''

      try {
      } catch (error) {
        this.errorMessage = 'Nespravny e-mail alebo heslo.'
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

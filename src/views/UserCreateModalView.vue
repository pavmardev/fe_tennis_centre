<template>
  <div>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-50 px-4"
    >
      <div class="bg-white border border-black/10 rounded-lg max-w-md w-full p-6 shadow-2xl">
        <!-- Hlavička modálu -->
        <div class="flex items-center justify-between mb-5">
          <h3 class="font-black text-black text-xl">Create New User</h3>
          <button
            @click="closeModal"
            class="text-black/40 hover:text-black font-bold text-lg leading-none"
          >
            &times;
          </button>
        </div>

        <!-- Formulár -->
        <form @submit.prevent="submitUser" class="space-y-4 text-xs">
          <div>
            <label class="block text-black/60 font-bold mb-1">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="border border-black/20 rounded px-3 py-2 text-sm w-full bg-white focus:outline-none focus:border-black transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label class="block text-black/60 font-bold mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="border border-black/20 rounded px-3 py-2 text-sm w-full bg-white focus:outline-none focus:border-black transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label class="block text-black/60 font-bold mb-1">Password</label>
            <input
              v-model="form.password"
              type="password"
              required
              class="border border-black/20 rounded px-3 py-2 text-sm w-full bg-white focus:outline-none focus:border-black transition-colors"
              placeholder="••••••••"
            />
          </div>

          <!-- Akčné tlačidlá -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-black/10 mt-6">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 bg-black/5 hover:bg-black/10 text-black font-bold rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="px-4 py-2 bg-[#8dc707] hover:bg-[#7cb006] text-black font-bold rounded transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Creating...' : 'Create User' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <v-snackbar v-model="showSnackbar" timeout="3000" location="top" :color="snackbarColor">
      <div class="flex items-center justify-center w-full text-center">
        {{ snackbarText }}
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import api from '../api/axios'

export default {
  name: 'UserCreateModalView',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close', 'user-created'],
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        password: '',
      },
      showSnackbar: false,
      snackbarColor: 'success',
      snackbarText: '',
    }
  },
  methods: {
    closeModal() {
      this.form = { name: '', email: '', password: '' }
      this.$emit('close')
    },
    async submitUser() {
      this.loading = true
      try {
        const response = await api.post('/users', this.form)
        this.$emit('user-created', response.data)
        this.closeModal()
        this.snackbarColor = 'success'
        this.snackbarText = response?.data?.message || 'User created successfully'
        this.showSnackbar = true
      } catch (err) {
        console.error('Error creating user:', err)
        this.snackbarColor = 'error'
        this.snackbarText = err.response?.data?.message
        this.showSnackbar = true
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

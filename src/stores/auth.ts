import { defineStore } from 'pinia'
import api from '../api/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null

      try {
        const response = await api.post('/auth/login', { email, password })
        this.token = response.data.token
        this.user = response.data.user

        localStorage.setItem('token', response.data.token)
      } catch (error) {
        this.error = error.response?.data?.message || 'Login failed'
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchMe() {
      if (!this.token) return

      try {
        const response = await api.get('/auth/me')
        this.user = response.data.user
      } catch (error) {
        this.logout()
      }
    },

    async logout() {
      try {
        await api.post('/auth/logout')
      } catch (error) {
        console.log('Logout failed', error)
        throw error
      } finally {
        this.token = null
        this.user = null
        localStorage.removeItem('token')
      }
    },

    async register(name, email, password) {
      try {
        await api.post('/auth/register', {
          name,
          email,
          password,
        })
      } catch (error) {
        console.log('Register failed', error)
        throw error
      }
    },
  },
})

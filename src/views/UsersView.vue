<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <!-- Hlavička -->
    <div class="flex items-center justify-between gap-4 mb-8 flex-wrap">
      <div>
        <h1 class="font-black text-black text-3xl mb-1">Users Management</h1>
        <p class="text-black/50 text-sm">Overview and management of all registered users.</p>
      </div>
      <button
        v-if="this.$route.name == 'admin' && this.showAll"
        @click="showModal = true"
        class="px-4 py-2 bg-[#8dc707] hover:bg-[#7cb006] text-black font-bold text-xs rounded transition-colors"
      >
        + Add User
      </button>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="py-12 text-center text-black/50 font-medium">Loading users...</div>

    <!-- Content (zobrazí sa až po načítaní) -->
    <div v-else-if="users">
      <!-- Štatistické karty -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <div class="bg-white border border-black/10 rounded p-4">
          <div class="flex items-center gap-2 text-black/40 mb-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span class="text-xs">Total Users</span>
          </div>
          <div class="font-black text-black text-2xl">{{ users.length }}</div>
        </div>

        <div class="bg-white border border-black/10 rounded p-4">
          <div class="flex items-center gap-2 text-black/40 mb-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
            <span class="text-xs">Members</span>
          </div>
          <div class="font-black text-black text-2xl">{{ activeMembersCount }}</div>
        </div>
      </div>

      <!-- Tabuľka Používateľov -->
      <div class="bg-white border border-black/10 rounded overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="border-b border-black/10 bg-black/[0.02] text-[11px] font-black uppercase text-black/40 tracking-wider"
              >
                <th class="py-3 px-4">User</th>
                <th class="py-3 px-4">Email</th>
                <th class="py-3 px-4">Membership</th>
                <th class="py-3 px-4">Created At</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody class="divide-y divide-black/10 text-xs">
              <tr
                v-for="user in users"
                :key="user.id"
                class="hover:bg-black/[0.01] transition-colors"
              >
                <!-- User (Name / ID) -->
                <td class="py-3.5 px-4">
                  <div v-if="editingUserId === user.id" class="flex flex-col gap-1">
                    <input
                      v-model="editForm.name"
                      type="text"
                      class="border border-black/20 rounded px-2 py-1 text-sm w-full bg-white focus:outline-none focus:border-black"
                      placeholder="User name"
                    />
                    <div class="text-[10px] text-black/40 font-mono">ID: {{ user.id }}</div>
                  </div>
                  <div v-else class="flex items-center gap-2.5">
                    <div
                      class="w-8 h-8 rounded bg-[#8dc707]/15 flex items-center justify-center shrink-0"
                    >
                      <span class="text-xs font-black text-[#5a8000]">
                        {{ getInitials(user.name) }}
                      </span>
                    </div>
                    <div>
                      <div class="font-black text-black text-sm">{{ user.name }}</div>
                      <div class="text-[10px] text-black/40 font-mono">ID: {{ user.id }}</div>
                    </div>
                  </div>
                </td>

                <!-- Email -->
                <td class="py-3.5 px-4 font-medium text-black/70">
                  <input
                    v-if="editingUserId === user.id"
                    v-model="editForm.email"
                    type="email"
                    class="border border-black/20 rounded px-2 py-1 text-xs w-full bg-white focus:outline-none focus:border-black"
                    placeholder="Email address"
                  />
                  <span v-else>{{ user.email }}</span>
                </td>

                <!-- Membership -->
                <td class="py-3.5 px-4">
                  <select
                    v-if="editingUserId === user.id"
                    v-model="editForm.membership_id"
                    class="border border-black/20 rounded px-2 py-1 text-xs w-full bg-white focus:outline-none focus:border-black"
                  >
                    <option value="">No Membership</option>
                    <option v-for="m in memberships" :key="m.id" :value="m.id">
                      {{ m.name }}
                    </option>
                  </select>
                  <template v-else>
                    <span
                      v-if="user.membership"
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#8dc707]/20 text-[#5a8000]"
                    >
                      {{
                        typeof user.membership === 'object' ? user.membership.name : user.membership
                      }}
                    </span>
                    <span
                      v-else
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/5 text-black/40"
                    >
                      No Membership
                    </span>
                  </template>
                </td>

                <td class="py-3.5 px-4 text-black/50 font-medium">
                  <div class="flex items-center gap-1.5">
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {{ formatDate(user.email_verified_at) }}
                  </div>
                </td>

                <!-- Actions -->
                <td class="py-3.5 px-4 text-right">
                  <div class="flex items-center justify-end gap-3">
                    <template v-if="editingUserId === user.id">
                      <button
                        @click="updateUser(user.id)"
                        class="text-xs text-[#5a8000] hover:underline font-bold transition-colors"
                      >
                        Save
                      </button>
                      <button
                        @click="cancelEdit"
                        class="text-xs text-black/50 hover:underline font-bold transition-colors"
                      >
                        Cancel
                      </button>
                    </template>
                    <template v-else>
                      <button
                        @click="editUser(user)"
                        class="text-xs text-black/70 hover:text-black font-bold transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        @click="deleteUser(user.id)"
                        class="text-xs text-red-500 hover:text-red-700 font-bold transition-colors"
                      >
                        Delete
                      </button>
                    </template>
                  </div>
                </td>
              </tr>

              <tr v-if="users.length === 0">
                <td colspan="5" class="py-8 text-center text-black/40 font-medium">
                  No users found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <UserCreateModalView :isOpen="showModal" @close="showModal = false" @user-created="fetchUsers" />
</template>

<script>
import api from '../api/axios'
import UserCreateModalView from './UserCreateModalView.vue'

export default {
  name: 'UsersView',
  components: {
    UserCreateModalView,
  },
  data() {
    return {
      loading: false,
      error: null,
      users: [],
      memberships: [],
      showModal: false,
      editingUserId: null,
      editForm: {
        name: '',
        email: '',
        membership_id: '',
      },
    }
  },
  props: {
    showAll: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    activeMembersCount() {
      if (!this.users) return 0
      return this.users.filter((user) => !!user.membership).length
    },
  },
  methods: {
    getInitials(name) {
      if (!name) return 'U'
      return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },
    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)

      return new Intl.DateTimeFormat('sk-SK', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    },
    async fetchUsers() {
      const response = await api.get('/users')
      this.users = response?.data?.data || []
    },
    async fetchMemberships() {
      const response = await api.get('/memberships')
      this.memberships = response?.data?.data || response?.data || []
    },
    editUser(user) {
      this.editingUserId = user.id
      this.editForm = {
        name: user.name,
        email: user.email,
        membership_id: user.membership_id || user.membership?.id || '',
      }
    },
    cancelEdit() {
      this.editingUserId = null
      this.editForm = { name: '', email: '', membership_id: '' }
    },
    async updateUser(userId) {
      try {
        await api.patch(`/users/${userId}`, this.editForm)

        await this.fetchUsers()

        this.cancelEdit()
      } catch (err) {
        console.error('Error updating user:', err)
        window.alert('Error updating user.')
      }
    },
    async deleteUser(userId) {
      if (!confirm('Are you sure you want to delete this user?')) return

      try {
        await api.delete(`/users/${userId}`)
        this.fetchUsers()
      } catch (err) {
        window.alert('Error deleting user:', err)
      }
    },
  },
  async created() {
    this.loading = true

    try {
      await Promise.all([this.fetchUsers(), this.fetchMemberships()])
    } catch (err) {
      this.error = err
      console.error(this.error)
    } finally {
      this.loading = false
    }
  },
}
</script>

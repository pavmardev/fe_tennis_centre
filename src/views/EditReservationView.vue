<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
  >
    <div class="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
      <h2 class="text-xl font-black mb-4">Edit Reservation</h2>

      <form @submit.prevent="submitUpdate" class="space-y-4">
        <!-- Date -->
        <div>
          <label class="block text-xs font-bold mb-1">Reservation Date</label>
          <input
            type="date"
            v-model="form.reservation_date"
            @change="fetchSlots"
            required
            :min="minDate"
            class="w-full border border-black/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8dc707]"
          />
        </div>

        <!-- Time Slot -->
        <div>
          <label class="block text-xs font-bold mb-1">Time Slot</label>
          <select
            v-model="form.time_slot_id"
            required
            class="w-full border border-black/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8dc707]"
          >
            <option v-if="loadingSlots" disabled value="">Loading time slots...</option>
            <option v-else-if="!availableTimeSlots.length" disabled value="">
              No slots available
            </option>
            <option v-for="slot in availableTimeSlots" :key="slot.id" :value="slot.id">
              {{ slot.time_slot }}
            </option>
          </select>
        </div>

        <!-- Equipment -->
        <div>
          <label class="block text-xs font-bold mb-2">Equipment (Optional)</label>
          <div class="space-y-2 max-h-36 overflow-y-auto border border-black/10 p-2 rounded">
            <label
              v-for="item in equipments"
              :key="item.id"
              class="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                :value="item.id"
                v-model="form.equipment"
                class="accent-[#8dc707]"
              />
              <span>{{ item.name }}</span>
            </label>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4">
          <button
            type="button"
            @click="close"
            class="px-4 py-2 border rounded text-xs font-bold hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="px-4 py-2 bg-[#8dc707] text-black font-bold rounded text-xs hover:bg-[#7cb006]"
          >
            {{ loading ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import api from '../api/axios'

export default {
  name: 'EditReservationModal',
  props: {
    modelValue: Boolean,
    booking: Object,
  },
  emits: ['update:modelValue', 'notify'],
  data() {
    return {
      loading: false,
      loadingSlots: false,
      equipments: [],
      availableTimeSlots: [],
      form: {
        id: null,
        court_id: null,
        time_slot_id: null,
        reservation_date: '',
        equipment: [],
      },
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      async handler(val) {
        if (val && this.booking) {
          this.form = {
            id: this.booking.id,
            user_id: useAuthStore().user.id,
            court_id: this.booking.court_id,
            time_slot_id: null,
            reservation_date: this.booking.reservation_date,
            equipment:
              this.booking.equipment
                ?.map((e) => Number(e?.id))
                ?.filter((id) => !isNaN(id) && id > 0) || [],
          }
          await this.fetchEquipments()
          await this.fetchSlots()
        }
      },
    },
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false)
    },
    async fetchEquipments() {
      try {
        const res = await api.get('/equipment')
        this.equipments = res.data?.data || res.data
      } catch (err) {
        console.error('Chyba pri načítaní vybavenia:', err)
      }
    },
    async fetchSlots() {
      if (!this.form.reservation_date || !this.form.court_id) return

      this.loadingSlots = true
      try {
        const res = await api.post(`courts/${this.form.court_id}/available-time-slots`, {
          reservation_date: this.form.reservation_date,
        })

        this.availableTimeSlots = res.data?.data || res.data
      } catch (err) {
        this.availableTimeSlots = []
      } finally {
        this.loadingSlots = false
      }
    },
    async submitUpdate() {
      this.loading = true

      try {
        const res = await api.put(`/reservations/${this.form.id}`, this.form)
        this.$emit('notify', {
          text: res.data?.message || 'Reservation updated!',
          color: 'success',
          refresh: true,
        })
        this.close()
      } catch (err) {
        console.log(err.response || 'Update failed')

        const errorMessage = err.response?.data?.message || 'Failed to update reservation.'

        this.$emit('notify', {
          text: errorMessage,
          color: 'error',
          refresh: false,
        })
      } finally {
        this.loading = false
      }
    },
  },
  computed: {
    minDate() {
      return new Date().toISOString().split('T')[0]
    },
  },
}
</script>

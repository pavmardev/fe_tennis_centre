import { defineStore } from 'pinia'

export const useCourtStore = defineStore('court', {
  state: () => ({
    selectedCourt: null,
  }),
  actions: {
    setSelectedCourt(court) {
      this.selectedCourt = court
    },
  },
})

import { defineStore } from 'pinia'

export const useCourtStore = defineStore('court', {
  state: () => ({
    selectedCourt: null,
    date: null,
    hour: null,
  }),
  actions: {
    setSelectedCourt(court) {
      this.selectedCourt = court
    },
    setSelectedDateAndTime(time, date) {
      this.date = date
      this.hour = time
    },
  },
})

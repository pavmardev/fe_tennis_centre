import { defineStore } from 'pinia'

export const useCourtStore = defineStore('court', {
  state: () => ({
    date: null,
    hour: null,
    totalCost: 0,
    selectedCourt: null,
  }),
  actions: {
    setCourt(court) {
      this.selectedCourt = court
    },
    setSelectedDateAndTime(time, date) {
      this.date = date
      this.hour = time
    },
    seTotalCost(cost) {
      this.totalCost = cost
    },
  },
})

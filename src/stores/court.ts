import { defineStore } from 'pinia'

export const useCourtStore = defineStore('court', {
  state: () => ({
    date: null,
    hour: null,
    totalCost: 0,
  }),
  actions: {
    setSelectedDateAndTime(time, date) {
      this.date = date
      this.hour = time
    },
    seTotalCost(cost) {
      this.totalCost = cost
    },
  },
})

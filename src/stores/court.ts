import { defineStore } from 'pinia'

export const useCourtStore = defineStore('court', {
  state: () => ({
    selectedCourt: null,
    date: null,
    hour: null,
    totalCost: 0,
    equipment: [
      {
        id: 1,
        name: 'Tennis Racket',
        description:
          'Premium Wilson or Babolat rackets available in various grip sizes and weights.',
        cost: 5,
        metrics: 'match',
        logo: '\u{1F3BE}',
      },
      {
        id: 2,
        name: 'Can of 4 Balls',
        description: 'Pressurised premium tennis balls suitable for all court surfaces.',
        cost: 3,
        metrics: 'can',
        logo: '\u{1F94E}',
      },
    ],
  }),
  actions: {
    setSelectedCourt(court) {
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

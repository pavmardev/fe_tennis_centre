<template>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="court in isCategorySet"
      :key="court.id"
      class="group flex flex-col sm:flex-row bg-white border border-black/10 rounded overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div class="relative bg-black/10 shrink-0 sm:w-52 h-48 sm:h-auto">
        <div
          class="w-full h-full bg-white flex items-center justify-center text-white/20 font-bold"
        >
          Court Image
        </div>
        <div class="absolute top-3 left-3">
          <span
            class="bg-white text-black text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded shadow"
            >{{ court.surface }}</span
          >
        </div>
      </div>
      <div class="flex flex-col justify-between p-5 flex-1">
        <div>
          <h3 class="font-black text-black text-xl mb-1">{{ court.name }}</h3>
          <p class="text-black/55 text-sm leading-relaxed mb-3">
            {{ court.description }}
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="feature in court.features"
              class="inline-flex items-center gap-1 bg-black/[0.05] text-black/60 text-xs px-2 py-1 rounded"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8dc707"
                stroke-width="4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ feature }}
            </span>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-black/[0.08]">
          <div class="flex items-baseline gap-3">
            <div>
              <span class="font-black text-black text-xl">{{ court.pricing[0] }}</span>
              <span class="text-black/40 text-xs ml-1">day/hr</span>
            </div>
            <div>
              <span class="font-bold text-black/60 text-sm">{{ court.pricing[1] }}</span>
              <span class="text-black/40 text-xs ml-1">eve/hr</span>
            </div>
          </div>
          <RouterLink
            :to="linkTo(court)"
            class="flex items-center gap-1.5 px-4 py-2 bg-black text-[#8dc707] text-sm font-bold rounded hover:opacity-80 transition-opacity"
          >
            Reserve
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CourtsListView',
  props: {
    category: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      courts: [
        {
          id: 1,
          name: 'Court Roland',
          description:
            'Premium red clay court with excellent water drainage and professional lighting.',
          features: ['Floodlights', 'Umpire Chair'],
          pricing: ['$30', '$40'],
          surface: 'Clay',
        },
        {
          id: 2,
          name: 'Court Wimbledon',
          description:
            'Authentic tournament grass surface offering low bounce and fast-paced rallies.',
          features: ['Pro-Standard'],
          pricing: ['$45', '$55'],
          surface: 'Grass',
        },
      ],
    }
  },
  methods: {
    linkTo(court) {
      if (this.$route.name == 'courts') {
        return {
          name: 'book-details',
          params: { id: court.id },
        }
      } else {
        return {
          name: 'courts',
        }
      }
    },
  },
  computed: {
    isCategorySet() {
      if (this.category) {
        return this.filterByCategory
      } else {
        return this.courts
      }
    },
    filterByCategory() {
      if (this.category == 'All') {
        return this.courts
      } else {
        return this.courts.filter((c) => c.surface == this.category)
      }
    },
  },
}
</script>

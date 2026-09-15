<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="font-black text-black text-3xl">Book a Court</h1>
        <p class="text-black/50 text-sm mt-1">Pick a surface, choose a date and grab your slot.</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <button
          v-for="cat in categories"
          @click="setCategory(cat)"
          class="px-4 py-2 rounded text-xs font-bold capitalize transition-colors"
          :class="selectedCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>
    </div>
    <CourtsListView :category="defaultCategory" />
  </section>
</template>

<script>
import CourtsListView from './CourtsListView.vue'
export default {
  name: 'CourtsView',
  components: {
    CourtsListView,
  },
  data() {
    return {
      categories: ['All', 'Clay', 'Grass', 'Indoor'],
      defaultCategory: 'All',
    }
  },
  methods: {
    setCategory(cat) {
      this.defaultCategory = cat
    },
    selectedCategory(cat) {
      if (this.defaultCategory == cat) {
        return 'text-black bg-[#8dc707]'
      } else {
        return 'bg-white text-black/60 border border-black/[0.12] hover:border-[#8dc707]/50'
      }
    },
  },
}
</script>

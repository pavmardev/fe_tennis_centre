<template>
  <body class="bg-gray-50 text-black antialiased">
    <section class="relative bg-black overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&h=800&fit=crop&auto=format"
        alt="Aerial tennis court view"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
      ></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 lg:py-36">
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 bg-[#8dc707] text-black px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
            Open Today · 08:00 – 22:00
          </div>
          <h1 class="text-white font-black leading-none mb-5 text-4xl sm:text-5xl md:text-6xl">
            Play Tennis.<br />
            <span class="text-[#8dc707]">Book Instantly.</span>
          </h1>
          <p class="text-white/60 text-lg font-light mb-8 leading-relaxed max-w-[480px]">
            Five premium courts — clay, grass, and indoor — with real-time availability, equipment
            rental, and smart season tickets.
          </p>
          <div class="flex flex-wrap gap-3">
            <RouterLink
              :to="{ name: 'courts' }"
              class="flex items-center gap-2 px-6 py-3.5 bg-[#8dc707] text-black font-bold rounded hover:bg-[#9fd608] transition-colors"
            >
              Book a Court
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </RouterLink>
            <RouterLink
              :to="{ name: 'subscriptions' }"
              class="flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-medium rounded border border-white/20 hover:bg-white/15 transition-colors"
            >
              View Memberships
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#8dc707]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="flex flex-col" v-for="headingsText in heroSectionDiv">
          <span class="font-black text-black text-2xl leading-tight">{{
            headingsText.mainHeading
          }}</span>
          <span class="text-black/60 text-xs font-medium mt-0.5">{{
            headingsText.secondLevelHeading
          }}</span>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div class="flex items-end justify-between mb-10">
        <div>
          <span class="text-[#8dc707] font-bold text-xs tracking-widest uppercase"
            >Our Facilities</span
          >
          <h2 class="font-black text-black text-3xl sm:text-4xl mt-1">All Courts</h2>
          <p class="text-black/50 mt-2 text-sm max-w-md">
            Five world-class playing surfaces, maintained to professional standards daily.
          </p>
        </div>
        <RouterLink
          :to="{ name: 'courts' }"
          class="hidden sm:flex items-center gap-1.5 text-sm font-bold text-black hover:text-[#8dc707] transition-colors"
        >
          Book now
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </RouterLink>
      </div>
      <CourtsListView />
    </section>

    <section class="bg-[#8dc707] py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="mb-10">
          <span class="text-black/50 font-bold text-xs tracking-widest uppercase">Gear Up</span>
          <h2 class="font-black text-black text-3xl sm:text-4xl mt-1">Equipment Rental</h2>
          <p class="text-black/60 mt-2 text-sm max-w-md">
            Everything you need for a complete session — add any item to your booking at checkout.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="eq in equipment"
            class="bg-white rounded p-5 flex flex-col hover:shadow-md transition-shadow"
          >
            <div class="text-3xl mb-3">{{ eq.logo }}</div>
            <div class="font-black text-black text-base mb-1">{{ eq.name }}</div>
            <p class="text-black/50 text-xs leading-relaxed mb-4 flex-1">
              {{ eq.description }}
            </p>
            <div class="flex items-center justify-between pt-3 border-t border-black/[0.08]">
              <div>
                <span class="font-black text-black text-lg">{{ eq.cost }}</span>
                <span class="text-black/40 text-xs ml-1">/{{ eq.metrics }}</span>
              </div>
              <button class="text-xs font-bold text-black/50 hover:text-black transition-colors">
                Add to booking →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div class="mb-10">
        <span class="text-[#8dc707] font-bold text-xs tracking-widest uppercase"
          >What We Offer</span
        >
        <h2 class="font-black text-black text-3xl sm:text-4xl mt-1">Club Services</h2>
        <p class="text-black/50 mt-2 text-sm max-w-md">
          Beyond the court — everything that makes AceReserve the complete tennis experience.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="service in services"
          class="group border border-black/10 rounded p-6 bg-white hover:border-[#8dc707] hover:shadow-md transition-all"
        >
          <h3 class="font-black text-black text-base mb-1.5">{{ service.name }}</h3>
          <p class="text-black/50 text-sm leading-relaxed mb-3">{{ service.description }}</p>
          <span class="text-xs font-bold text-[#8dc707] bg-[#8dc707]/10 px-2.5 py-1 rounded">{{
            service.cost
          }}</span>
        </div>
      </div>
    </section>

    <section class="bg-black py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <span class="text-[#8dc707] font-bold text-xs tracking-widest uppercase"
            >Season Tickets</span
          >
          <h2 class="font-black text-white text-3xl sm:text-4xl mt-1 mb-3">Play more. Pay less.</h2>
          <p class="text-white/40 text-sm max-w-lg mx-auto">
            Credit-based memberships. Bookings deduct from your balance — no per-session invoices,
            no friction.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div
            v-for="tic in tickets"
            class="rounded p-5 border-2 bg-white/5 border-white/10 hover:border-white/20 transition-colors"
          >
            <div class="text-sm font-bold mb-1 text-white/50">{{ tic.name }}</div>
            <div class="font-black text-white text-3xl mb-1">{{ tic.cost }}</div>
            <div class="text-xs mb-4 text-white/40">{{ tic.bookingsAmount }}</div>
            <div class="space-y-1.5">
              <div v-for="feat in tic.features" class="flex items-start gap-2 text-xs">
                <svg
                  width="11"
                  height="11"
                  class="mt-0.5 shrink-0 text-[#8dc707]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="text-white/50">{{ feat }}</span>
              </div>
            </div>
          </div>

          <!---<div class="rounded p-5 border-2 bg-[#8dc707] border-[#8dc707] transition-colors">
            <div class="text-[10px] font-black text-black/50 tracking-widest uppercase mb-2">
              Most Popular
            </div>
            <div class="text-sm font-bold mb-1 text-black/60">Pro Player</div>
            <div class="font-black text-black text-3xl mb-1">$99</div>
            <div class="text-xs mb-4 text-black/60">10 bookings/mo</div>
            <div class="space-y-1.5">
              <div class="flex items-start gap-2 text-xs">
                <svg
                  width="11"
                  height="11"
                  class="mt-0.5 shrink-0 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="text-black/70">14-day advanced booking</span>
              </div>
              <div class="flex items-start gap-2 text-xs">
                <svg
                  width="11"
                  height="11"
                  class="mt-0.5 shrink-0 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="text-black/70">10% off equipment rentals</span>
              </div>
            </div>
          </div>-->
        </div>
        <div class="text-center">
          <RouterLink
            :to="{ name: 'subscriptions' }"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8dc707] text-black font-black rounded hover:bg-[#9fd608] transition-colors"
          >
            View All Plans
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div class="mb-10">
        <span class="text-[#8dc707] font-bold text-xs tracking-widest uppercase"
          >Member Reviews</span
        >
        <h2 class="font-black text-black text-3xl sm:text-4xl mt-1">What members say</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="rev in reviews"
          class="bg-white border border-black/10 rounded p-5 hover:border-[#8dc707]/50 transition-colors"
        >
          <div class="flex items-center gap-1 mb-3">
            <svg width="13" height="13" class="fill-[#8dc707] text-[#8dc707]" viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
            <svg width="13" height="13" class="fill-[#8dc707] text-[#8dc707]" viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
            <svg width="13" height="13" class="fill-[#8dc707] text-[#8dc707]" viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
            <svg width="13" height="13" class="fill-[#8dc707] text-[#8dc707]" viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
            <svg width="13" height="13" class="fill-[#8dc707] text-[#8dc707]" viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </div>
          <p class="text-black/70 text-sm leading-relaxed mb-4">
            {{ rev.text }}
          </p>
          <div>
            <div class="font-bold text-black text-sm">{{ rev.name }}</div>
            <div class="text-black/40 text-xs">{{ rev.courtName }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#8dc707] py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="font-black text-black text-3xl sm:text-4xl mb-3">Come play with us.</h2>
          <p class="text-black/60 text-sm mb-6 leading-relaxed">
            Open seven days a week. Whether you're a first-timer or a seasoned competitor, you're
            welcome at AceReserve.
          </p>
          <div class="space-y-3 text-sm">
            <div class="flex items-center gap-3 text-black/70 font-medium">
              <span class="text-black">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              14 Grand Slam Avenue, London SW7 4AB
            </div>

            <div class="flex items-center gap-3 text-black/70 font-medium">
              <span class="text-black">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </span>
              +44 20 7946 0318
            </div>

            <div class="flex items-center gap-3 text-black/70 font-medium">
              <span class="text-black">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              hello@acereserve.club
            </div>

            <div class="flex items-center gap-3 text-black/70 font-medium">
              <span class="text-black">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              Mon–Sun: 08:00 – 22:00
            </div>
          </div>
        </div>
        <div class="bg-black rounded p-6">
          <h3 class="font-black text-white text-xl mb-4">Send us a message</h3>
          <div class="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              class="w-full px-4 py-3 bg-white/10 border border-white/10 rounded text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8dc707]"
            />
            <input
              type="email"
              placeholder="Email address"
              class="w-full px-4 py-3 bg-white/10 border border-white/10 rounded text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8dc707]"
            />
            <textarea
              rows="3"
              placeholder="How can we help?"
              class="w-full px-4 py-3 bg-white/10 border border-white/10 rounded text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8dc707] resize-none"
            ></textarea>
            <button
              class="w-full py-3 bg-[#8dc707] text-black font-black rounded hover:bg-[#9fd608] transition-colors"
            >
              SendMessage
            </button>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import CourtsListView from './CourtsListView.vue'
export default {
  name: 'HomeView',
  components: {
    CourtsListView,
  },
  data() {
    return {
      heroSectionDiv: [
        {
          mainHeading: 5,
          secondLevelHeading: 'Premium Courts',
        },
        {
          mainHeading: '1,200+',
          secondLevelHeading: 'Active Members',
        },
        {
          mainHeading: '98%',
          secondLevelHeading: 'Satisfaction Rate',
        },
        {
          mainHeading: '3 Surfaces',
          secondLevelHeading: 'Clay · Grass · Indoor',
        },
      ],
      equipment: [
        {
          name: 'Tennis Racket',
          description:
            'Premium Wilson or Babolat rackets available in various grip sizes and weights.',
          cost: '$5',
          metrics: 'match',
          logo: '\u{1F3BE}',
        },
        {
          name: 'Can of 4 Balls',
          description: 'Pressurised premium tennis balls suitable for all court surfaces.',
          cost: '$3',
          metrics: 'can',
          logo: '\u{1F94E}',
        },
      ],
      services: [
        {
          name: 'Coaching & Lessons',
          description:
            'Private or group sessions with our certified ITF coaches. Available for all skill levels — from complete beginner to competition prep.',
          cost: 'From $45/hr',
        },
        {
          name: 'Ball Machine Sessions',
          description:
            'Solo practice with programmable Lobster machines. Set spin, speed, and oscillation to drill any shot pattern.',
          cost: '$18/hr',
        },
      ],
      tickets: [
        {
          name: 'Club Starter',
          cost: '$49',
          bookingsAmount: '4 bookings/mo',
          features: ['7-day advanced booking', 'Free locker room access'],
        },
        {
          name: 'Pro Player',
          cost: '$99',
          bookingsAmount: '10 bookings/mo',
          features: ['14-day advanced booking', '10% off equipment rentals'],
        },
      ],
      reviews: [
        {
          text: '"The grass courts are impeccable. Booking takes 30 seconds — I love the whole system."',
          name: 'Marcus L.',
          courtName: 'Court Wimbledon',
        },
      ],
    }
  },
}
</script>

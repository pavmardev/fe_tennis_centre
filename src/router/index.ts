import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import CourtsView from '@/views/CourtsView.vue'
import ReservationsView from '@/views/ReservationsView.vue'
import SubscriptionsView from '@/views/SubscriptionsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import BookDetailsView from '@/views/BookDetailsView.vue'
import BookConfirmation from '@/views/BookConfirmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/courts',
      name: 'courts',
      component: CourtsView,
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: ReservationsView,
    },
    {
      path: '/book-details/:id',
      name: 'book-details',
      component: BookDetailsView,
      props: true,
    },
    {
      path: '/book-confirmation',
      name: 'book-confirmation',
      component: BookConfirmation,
    },
    {
      path: '/subscriptions',
      name: 'subscriptions',
      component: SubscriptionsView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
  ],
})

export default router

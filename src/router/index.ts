import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import CourtsView from '@/views/CourtsView.vue'
import ReservationsView from '@/views/ReservationsView.vue'
import SubscriptionsView from '@/views/SubscriptionsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import BookDetailsView from '@/views/BookDetailsView.vue'
import BookConfirmation from '@/views/BookConfirmation.vue'
import LoginRegisterView from '@/views/Login&RegisterView.vue'
import { useAuthStore } from '@/stores/auth'

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
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/book-details/:id',
      name: 'book-details',
      component: BookDetailsView,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/book-confirmation',
      name: 'book-confirmation',
      component: BookConfirmation,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/subscriptions',
      name: 'subscriptions',
      component: SubscriptionsView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginRegisterView,
    },
    {
      path: '/register',
      name: 'register',
      component: LoginRegisterView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (authStore.token && !authStore.user) {
    try {
      await authStore.fetchMe()
    } catch (error) {
      console.error('Neplatný token alebo chyba siete:', error)
    }
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }
})

export default router

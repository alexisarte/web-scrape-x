import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import { authGuard } from "@auth0/auth0-vue";
import { useAuthStore } from '@/stores/userAuthStore.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/website/:id',
      name: 'detail',
      beforeEnter: authGuard,
      component: () => import('../views/EditWebSiteView.vue')
    },
    {
      path: '/website/new',
      name: 'addWebsite',
      beforeEnter: authGuard,
      component: () => import('../views/NewWebSiteView.vue')
    },
    {
      path: '/websites',
      name: 'websites',
      beforeEnter: authGuard,
      component: () => import('../views/WebSitesListView.vue')
    },
    {
      path : '/profile',
      name: 'profile',
      beforeEnter: authGuard,
      component: UserProfileView
    }
  ]
})

router.beforeEach((to) => {
  // ✅ Esto funcionará porque el router comienza su navegación después
  // de que el router esté instalado y pinia también lo estará
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) return '/websites'
})

export default router

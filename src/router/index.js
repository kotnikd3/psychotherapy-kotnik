import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/denis-kotnik',
        name: 'denis_kotnik',
        component: () => import ('@/views/DenisKotnikView.vue')
    },
    {
        path: '/psychodynamic-psychotherapy',
        name: 'psychodynamic_psychotherapy',
        component: () => import('@/views/PsychodynamicPsychotherapyView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
})

export default router

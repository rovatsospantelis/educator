import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' // THE page — static import, όχι lazy

const routes = [
  { path: '/', name: 'home', component: HomeView },
  // Escape hatch για μελλοντικές «κανονικές» σελίδες (lazy):
  // { path: '/privacy', name: 'privacy', component: () => import('@/views/PrivacyView.vue') },

  // Κάθε άγνωστο path → αρχική (π.χ. παλιά /contact links)
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Smooth scroll σε hash (#about, #subjects…) με σεβασμό στο reduced-motion.
  // Το offset για το sticky navbar το πιάνει το `scroll-mt-*` στα sections.
  scrollBehavior(to) {
    const behavior = prefersReduced() ? 'auto' : 'smooth'
    if (to.hash === '#top') return { top: 0, behavior }
    if (to.hash) return { el: to.hash, behavior }
    return { top: 0 }
  },
})

// Handle stale chunks μετά από νέο deploy (αν προστεθούν lazy routes)
router.onError((error) => {
  if (/Failed to fetch dynamically imported module/.test(error.message)) {
    window.location.reload()
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import BeersView from '../views/BeersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beers',
      component: BeersView
    }
  ]
})

export default router

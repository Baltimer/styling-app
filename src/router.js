/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
      return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('@/views/Index.vue')
    },
    /**
     * COMPONENTS
     */
    {
      path: '/cards/simple-card',
      component: () => import('@/components/cards/SimpleCard.vue')
    }
  ]
})

export default router
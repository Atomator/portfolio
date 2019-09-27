import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Other from '@/pages/Other'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
      path: '/home',
      name: 'Welcome',
      component: Welcome
    },
    {
        path: '/other',
        name: 'Other',
        component: Other
    }
  ]
})

export default router

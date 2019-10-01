import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Other from '@/pages/Other'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/other',
        name: 'Other',
        component: Other
    }
  ]
})

export default router

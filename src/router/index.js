import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import About from '@/pages/About'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router

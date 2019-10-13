import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})

export default router

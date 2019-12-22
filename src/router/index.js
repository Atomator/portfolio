import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Resume from '@/pages/Resume'
import Vrkit from '@/pages/projects/Vrkit'
import Qlearning from '@/pages/projects/Qlearning'
import Neuralnetwork from '@/pages/projects/Neuralnetwork'
import Driveline from '@/pages/projects/Driveline'

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
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/projects/vrkit',
      name: 'Vrkit',
      component: Vrkit
    },
    {
      path: '/projects/qlearning',
      name: 'Qlearning',
      component: Qlearning
    },
    {
      path: '/projects/neuralnetwork',
      name: 'Neuralnetwork',
      component: Neuralnetwork
    },
    {
      path: '/projects/driveline',
      name: 'Driveline',
      component: Driveline
    },
  ]
})

export default router


import Vue from 'vue'
import Router from 'vue-router'

import Index from './pages/index'
import Home from './pages/home'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    }
  ]
})
export default router;
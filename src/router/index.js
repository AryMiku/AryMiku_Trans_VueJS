import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dowload/:id',
    name: 'Dowload',
    component: () => import('../components/dowload.vue')
  },
  {
    path: '/echhi',
    name: 'Echhi',
    component:() => import('../components/ecchi.vue')
  },
  {
    path: '/secret',
    name:'Secret',
    component:()=>import('../components/secret.vue')
  },
  {
    path: '/secret_dowload/:id',
    name:'Secret_Dowload',
    component:()=>import('../components/secret_dowload.vue')
  },
  {
    path: '/darkzone',
    name: 'Darkzone',
    component:()=>import('../components/darkzone.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

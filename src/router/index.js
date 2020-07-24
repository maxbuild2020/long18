import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('@/views/Home')
const Promotion = ()=> import('@/views/Promotion')
const Lives = ()=> import('@/views/Lives')
const Lotto = ()=> import('@/views/Lotto')
const Download = ()=> import('@/views/Download')
const Sports = ()=> import('@/views/Sports')
const Slots = ()=> import('@/views/Slots')
const Search = ()=> import('@/components/Search')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // children: [{
    //   path: '',
    //   component: Home
    // }]
  },
  {
    path: '/promotion',
    component: Promotion,
  },
  {
    path: '/lives',
    component: Lives,
  },
  {
    path: '/lotto',
    component: Lotto,
  },
  {
    path: '/download',
    component: Download,
  },
  {
    path: '/sports',
    component: Sports,
  },
  {
    path: '/slots',
    component: Slots,
    children: [{
      path: '',
      component: Search
    }]
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

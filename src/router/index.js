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
    path: '/', redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.location.href = "https://www.google.com/search?q=%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B7%B3%E8%BD%AC&rlz=1C5CHFA_enPH883PH883&oq=%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B7%B3%E8%BD%AC&aqs=chrome..69i57j0l2.6129j0j7&sourceid=chrome&ie=UTF-8"
        return
      }
      next()
    }
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

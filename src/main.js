import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './js/border.css'
import './js/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft,faBell, faEnvelopeOpen, faBookmark, faMoneyCheck, faHome, faFire, faDragon, faDice, faDownload, faAngleDoubleUp, faSearch, faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faChevronRight,faChevronLeft, faBell,faEnvelopeOpen, faBookmark, faMoneyCheck, faHome, faFire, faDragon, faDice, faDownload, faAngleDoubleUp, faSearch, faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

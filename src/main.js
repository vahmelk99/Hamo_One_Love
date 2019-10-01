import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import VueRouter from 'vue-router'
// import MainPage from './MainPage.vue'
// import OrderPage from './OrderPage.vue'
// import TrackDown from './TrackDown.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/:isWeb', component: App },
    { path: '*', component: App }
  ]
})

new Vue({
  // render: h => h(App)
  router 
}).$mount('#app')
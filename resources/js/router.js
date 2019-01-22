import Vue from 'vue'
import VueRouter from 'vue-router'

// page components
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// vue plugin
Vue.use(VueRouter)

// mapping
const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login
  }
]

// vue router instance
const router = new VueRouter({
  mode: 'history',
  routes
})

//export
export default router


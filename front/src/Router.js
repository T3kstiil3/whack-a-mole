import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: require('./components/Board.vue')},
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

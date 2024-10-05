import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Hubble from './components/Hubble.vue'
import JamesWebb from './components/JamesWebb.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hubble', component: Hubble },
  { path: '/james_webb', component: JamesWebb },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
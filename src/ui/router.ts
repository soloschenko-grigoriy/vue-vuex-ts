import Vue from 'vue'
import VueRouter from 'vue-router'
import { HomePage, ArticlePage } from '@/ui/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }, {
    path: '/articles/:id',
    name: 'Article',
    component: ArticlePage
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import { HomeView, ArticleView } from '@/ui/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }, {
    path: '/articles/:id',
    name: 'Article',
    component: ArticleView
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

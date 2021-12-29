import Vue from 'vue'
import VueRouter from 'vue-router'

import BaseLayout from '../components/BaseLayout'
import Home from '../views/home'
import TransactionManagement from '../views/transactionManagement'
import AccountManagement from '../views/accountManagement'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '系统首页',
        },
      },
      {
        path: '/transactionManagement',
        name: 'transactionManagement',
        component: TransactionManagement,
        meta: {
          title: '交易管理',
        },
      },
      {
        path: '/accountManagement',
        name: 'accountManagement',
        component: AccountManagement,
        meta: {
          title: '账号管理',
        },
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

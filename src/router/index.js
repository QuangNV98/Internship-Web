import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "@/layout/DashboardLayout.vue"

import Dashboard from "@/pages/Dashboard.vue"
import TableList from "@/pages/TableList.vue"
import NotFound from "@/pages/NotFoundPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

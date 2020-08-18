import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "@/layout/DashboardLayout.vue"
import AdminLayout from "@/layout/AdminLayout.vue"
import AdminDashboard from "@/pages/admin/AdminDashboard.vue"

import Dashboard from "@/pages/Dashboard.vue"
import TableList from "@/pages/TableList.vue"
import UserProfile from "@/pages/UserProfile.vue"
import NotFound from "@/pages/NotFoundPage.vue"
import Company from "@/pages/admin/Company.vue"
import AdminUser from "@/pages/admin/AdminUser.vue"

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
        path: "user",
        name: "user",
        component: UserProfile
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  {
    path: "/admin",
    component: AdminLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: AdminDashboard
      },
      {
        path: "company",
        name: "company",
        component: Company
      },
      {
        path: "users",
        name: "users",
        component: AdminUser
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

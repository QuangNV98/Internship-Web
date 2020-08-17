import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "@/layout/DashboardLayout.vue"

import Dashboard from "@/pages/Dashboard.vue"
import TableList from "@/pages/TableList.vue"
import UserProfile from "@/pages/UserProfile.vue"
import NotFound from "@/pages/NotFoundPage.vue"
import Company from "@/pages/admin/Company.vue"
import Instructor from "@/pages/admin/Instructor.vue"

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
    component: DashboardLayout,
    redirect: "/admin",
    children: [
      {
        path: "company",
        name: "company",
        component: Company
      },
      {
        path: "instructor",
        name: "instructor",
        component: Instructor
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

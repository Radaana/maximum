import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lessons.vue')
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lesson.vue'),
    children: [
      {
        // при совпадении пути с шаблоном /user/:id/profile
        // в <router-view> компонента User будет показан UserProfile
        path: 'tests',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tests.vue')
      },
      {
        // при совпадении пути с шаблоном /user/:id/posts
        // в <router-view> компонента User будет показан UserPosts
        path: 'statistics',
        component: () => import(/* webpackChunkName: "about" */ '../views/Statistics.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

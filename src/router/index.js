import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') }, //登录页
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/manage/page',
      children: [
        {
          path: '/manage/page',
          component: () => import('@/views/manage/ShouyePage.vue')
        },
        {
          path: '/manage/booking',
          component: () => import('@/views/manage/BookingPage.vue')
        },
        {
          path: '/manage/user',
          component: () => import('@/views/manage/UserPage.vue')
        },
        {
          path: '/manage/hexiao',
          component: () => import('@/views/manage/HexiaoPage.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        {
          path: 'user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: 'user/password',
          component: () => import('@/views/user/UserPassword.vue')
        }
      ]
    }
  ]
})

export default router

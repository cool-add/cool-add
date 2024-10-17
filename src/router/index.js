import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'
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
          component: () => import('@/views/manage/ShouyePage.vue') //首页
        },
        {
          path: '/manage/booking',
          component: () => import('@/views/manage/BookingPage.vue'),
          meta: { title: '预约管理' } //预约页
        },
        {
          path: '/manage/user',
          component: () => import('@/views/manage/UserPage.vue'),
          meta: { title: '用户管理' } //用户管理页
        },
        {
          path: '/manage/hexiao',
          component: () => import('@/views/manage/HexiaoPage.vue'),
          meta: { title: '核销管理' } //核销管理页
        },
        {
          path: '/manage/gonggao',
          component: () => import('@/views/manage/NoticePage.vue'),
          meta: { title: '公告管理' } //公告管理页
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue') //个人详情页
        },
        {
          path: 'user/avatar',
          component: () => import('@/views/user/UserAvatar.vue') //更新头像页
        },
        {
          path: 'user/password',
          component: () => import('@/views/user/UserPassword.vue') //重置密码页
        }
      ]
    }
  ]
})

// 登录拦截
// 1.  undefined / true 直接发行
// 2. false 拦截回from的地址页
// 3. 具体路径 或 路径对象 拦截到对应的地址
//   '/login'  或  { name:'login' }
// router.beforeEach((to) => {
//   // 如果没有token，且访问的是非登录页，拦截到登录，其他情况正常发行
//   const useStore = useUserStore()
//   if (!useStore.token && to.path !== '/login') return '/login'
// })

export default router

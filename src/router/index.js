import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Aboutpage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path:'/addcart',
      name:'addcart',
      component:() => import('../views/AddCart.vue')
    },
    {
      path:'/signup',
      name: 'signup',
      component: ()=> import('../views/SingUp.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import('../views/login.vue')
    },
    {
      path:'/checkout',
      name:'checkout',
      component:() => import('../views/CheckoutPage.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component:() => import('../views/ShopPage.vue')
    }
  ]
})

export default router

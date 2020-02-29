import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
        path: '/goods',
        name: 'Goods',
        component: () => import('../views/Goods.vue')
      },
      {
        path: '/evaluate',
        name: 'Evaluate',
        component: () => import('../views/Evaluate.vue')
      },
      {
        path: '/store',
        name: 'Store',
        component: () => import('../views/Store.vue')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',    
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
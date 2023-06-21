import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoVue from '@/components/Info.vue'
// import Contacto from '@/views/Contacto.vue'
import PersonajeEsp from '@/views/PersonajeEspecifico.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personajes',
    name: 'personajes',
    component:InfoVue,


    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/personajes/:id',
    props:true,
    component:PersonajeEsp
  },
  {
    path:'/contacto',
    name:'contacto',
    // component:Contacto,
    component:()=>import(/* webpackChunkName: "contacto" */ '@/views/Contacto.vue')

  },
  {
    path:'*',
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/ListaTareasContador.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'listaDeTareas',
      component: () => import('../components/ListaTareas.vue')
    }
  ]
})

export default router

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
      component: () => import('../modules/contador/componets/ListaTareasContador.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'listaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaTareas.vue')
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue')
    }
  ]
})

export default router

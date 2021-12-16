import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Productos from '../views/Productos.vue'
import ProductosCategoria from '../views/ProductosCategoria.vue'
import DetalleProducto from '../views/DetalleProducto.vue'
import ServiciosCategoria from '../views/ServiciosCategoria.vue'
import Agenda from '../views/Agenda.vue'
import Usuario from '../views/Usuario.vue'
import DetalleLocal from '../views/DetalleLocal.vue'
import Servicio from '../views/Servicio.vue'
import VistaAforo from '../views/VistaAforo.vue'
import AgendaQr from '../views/AgendaQr.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/local/:id',
    name: 'DetalleLocal',
    component: DetalleLocal,
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/productos/:categoria',
    name: 'ProductosCategoria',
    component: ProductosCategoria
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicio
  },
  {
    path: '/servicios/:categoria',
    name: 'ServiciosCategoria',
    component: ServiciosCategoria
  },
  {
    path: '/producto/:id',
    name: 'DetalleProducto',
    component: DetalleProducto
  },

{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: Usuario
  },
  {
    path: '/aforo',
    name: 'aforo',
    component: VistaAforo
  },
  {
    path: '/agenda_qr',
    name: 'agenda_qr',
    component: AgendaQr
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

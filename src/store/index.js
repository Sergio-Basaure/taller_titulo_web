import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import productos from './productos.js'
import productoCategoria from './productoCategoria.js'
import servicio from './servicio.js'
import servicioCategoria from './servicioCategoria.js'
import cliente from './cliente.js'
import reclamos from './reclamos.js'
import local from './local.js'
import agenda from './agenda.js'
import mensaje from './mensaje.js'
import qr from './qr.js'
export default createStore({

strict:true,

  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters:{

  },
  modules: {
    productos,
    productoCategoria,
    servicio,
    servicioCategoria,
    cliente,
    reclamos,
    local,
    agenda,
    mensaje,
    qr
  },

  plugins: [
    new VuexPersistence({
      key: 'ccs',
      storage: window.localStorage,
      modules : [
        'productos',
        'productoCategoria',
        'servicio',
        'servicioCategoria',
        'cliente',
        'reclamos',
        'local',
        'agenda',
      ]

    }).plugin
  ]
})

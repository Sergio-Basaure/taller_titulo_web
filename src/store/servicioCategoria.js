import axios from "axios";
export default {

    state: {
        servicioCategoria : []
    },
    mutations: {
        setServicio(state, servicioCategoria){
            state.servicioCategoria = servicioCategoria
        }
    },
    actions: {
        getServicioCategoria({ commit }){
            axios.get('categoria_servicio/')
            .then(servicioCategoria => {
                commit('setServicio', servicioCategoria.data)
            })
        }
    },
    getters: {
        servicioCategoria(state){
            return state.servicioCategoria
        },
        detalleCategoria: (state) => (id) => {
            return state.servicioCategoria.filter(cat => cat.id == id)
        }


    }
    }
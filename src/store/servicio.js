import axios from "axios";
export default {

    state: {
        servicios : []
    },
    mutations: {
        setServicios(state, servicios){
            state.servicios = servicios
        }
    },
    actions: {
        getServicio({ commit }){
            axios.get('servicio/')
            .then(servicios => {
                commit('setServicios', servicios.data)
            })
        }
    },
    getters: {
        servicios(state){
            return state.servicios
        },
        detalleServicio: (state) => (categoria) => {
            return state.servicios.filter( ds => ds.id_categoria == categoria)
        }


    }
    }
import axios from "axios";
export default{
    state: {
       reclamos: [],
       categoriaReclamo: [] 
    },
    mutations: {
        setReclamos(state, reclamos){
            state.reclamos = reclamos
        },
        setCategoriaReclamo(state, categoriaReclamo){
            state.categoriaReclamo = categoriaReclamo
        }
    },
    actions: {
        ingresoReclamoApi({ commit },payload){
            axios.post('reclamos/', payload)
            .then( resolve => {
                commit('setCategoriaReclamo', resolve.data)
                const mensaje = "Solicitud ingresada con exito"
                commit('setMensajeExitoso', mensaje)
            })
            .catch(function (error){
                console.log(error.response)
            })
        },
        getReclamoApi({ commit }){
            axios.get('reclamos/')
            .then( resolve => {
                commit('setReclamos', resolve.data)
            })
        },
        getCategoriaReclamoApi({ commit }){
            axios.get('categoria_reclamo/')
            .then( resolve => {
                commit('setCategoriaReclamo', resolve.data)
            })
        }

    },
    getters: {
        getReclamos(state){
            return state.reclamos
        },
        getCategoriaReclamo(state){
            return state.categoriaReclamo
        }
    }
}
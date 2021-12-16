import axios from "axios"
export default{

state: {
    mensaje: null,
    validador: undefined,
    camara: 'auto'
},
mutations: {
    setMensaje(state, mensaje){
        state.mensaje = mensaje
    },
    setValidador(state, validador) {
        state.validador = validador
    },
    setLoading(state, loading){
        state.loading = loading
    },
    setCamara(state, camara){
        state.camara = camara
    }
},
actions: {
     async buscarQr({ commit }, payload){
        axios.delete(`${payload}`)
        .then( resolve => {
            console.log(resolve.data)
            commit('setMensaje', resolve.data.mensaje)
            commit('setValidador', true)

        }).catch(function (error) {
            console.log(error.response.data.mensaje)
            commit('setMensaje', error.response.data.mensaje)
            commit('setValidador', false)
        })
    },
},
getters: {
    mensaje(state){
        return state.mensaje
    },
    validador(state){
        return state.validador
    },
    camara(state){
        return state.camara
    }
}
}
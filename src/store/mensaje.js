export default{
    state: {
        errorMensaje: [],
        mensajeExitoso :null,
    },
    mutations: {
        setErrorMensaje(state, errorMensaje){
            state.errorMensaje = errorMensaje
        },
        setMensajeExitoso(state, mensajeExitoso){
            state.mensajeExitoso = mensajeExitoso
        }
    },  
    actions: {
        mensajeExitosoNull({ commit }, mensaje){

            commit('setMensajeExitoso', mensaje)
        }
    },
    getters:{
        errorMensaje(state) {
            return state.errorMensaje
        },
        mensajeExitoso(state){
            return state.mensajeExitoso
        },

    },
}
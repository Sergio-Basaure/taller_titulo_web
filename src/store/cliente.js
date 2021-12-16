import axios from "axios"
import router from '../router'
export default {
state: {
    usuario: [],
    token: [],
    credenciales : false
},
mutations: {
    setUsuario(state, usuario){
        state.usuario = usuario
    },
    setToken(state, token){
        state.token = token
    },
    setCredenciales(state, credenciales){
        state.credenciales = credenciales
    }
},
actions: {
    getUsuario({ commit }, payload){
        axios.post('login/', payload)
        .then(resolve => {
            commit('setUsuario', resolve.data.cliente)
            commit('setToken', resolve.data.token)
            commit('setCredenciales', true)
            localStorage.setItem('token', resolve.data.token)
            let mensaje = `Bienvenido ${resolve.data.cliente.nombres} ${resolve.data.cliente.apellidos}`
            commit('setMensajeExitoso', mensaje)
            router.push('/')
        })
        .catch(function (error) {
            if(error.response == undefined){
                let mensaje = "error en el servidor"
                commit('setErrorMensaje', mensaje)
            }else{
                commit('setErrorMensaje', error.response.data)
            }
    })
    },
},
getters: {
    token(state){
        return state.token
    },
    usuario(state){
        return state.usuario
    },
    credenciales(state){
        return state.credenciales
    }
}
}
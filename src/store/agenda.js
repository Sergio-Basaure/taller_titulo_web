import axios from "axios"
import router from '../router'
export default{
    state: {
        hora: [],
        agenda: []
    },
    mutations: {
        SetHora(state, hora){
            state.hora = hora
        },
        setAgenda(state, agenda){
            state.agenda = agenda
        }
    },
    actions: {
        getHoraApi({ commit }){
            try {
                axios.get('hora/')
                .then( resolve => {
                    commit('SetHora', resolve.data)
                })
            } catch (error) {
                console.log(error.response.data)
            }

        },
        agendaApi({ commit }, payload){
            axios.post('agenda/', payload)
            .then( resolve => {
                commit('setAgenda', resolve.data)
                const mensaje = "Agenda creada con existo, Te esperamos!!!!"
                commit('setMensajeExitoso', mensaje)
                commit('setErrorMensaje', "")
                router.push('/')
            })
            .catch(function (error){
                if(error.response == undefined){
                    let mensaje = "error en el servidor"
                    commit('setErrorMensaje', mensaje)
                }else{
                    commit('setErrorMensaje', error.response.data)
                }
            })
        }
    },
    getters: {
        hora(state){
            return state.hora
        },
        agenda(state){
            return state.agenda
        }
    },
}
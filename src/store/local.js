import axios from "axios";
export default {
    state: {
        local: [],
    },
    mutations: {
        setLocal(state, local){
            state.local = local
        },
    },
    actions: {
        getLocalApi({ commit }){
            axios.get('local/')
            .then(resolve =>{
                commit("setLocal", resolve.data)
            })
        },
        
     },
    getters: {
        getLocal(state){
            return state.local
        },
        getLocalObj: (state) => (id) => {
            return state.local.filter(obj => obj.id == id)
        }
    },
}
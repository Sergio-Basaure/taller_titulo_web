import axios from 'axios'
export default{

state: {
    productoCategoria: []
},
mutations: {
    setProductoCategoria(state, productoCategoria){
        state.productoCategoria = productoCategoria
    }
},
actions: {
    getProductoCategoria({ commit }){
        axios.get('categoria_producto/')
        .then(productoCategoria => {
            commit("setProductoCategoria", productoCategoria.data);
        });
    }
},
getters: {
    productoCategorial(state){
        return state.productoCategoria
    },
    categoriaDinamica: (state) => (categoria) => {
        return state.productoCategoria.filter(cd => cd.nombre == categoria)
    }
    
}
}
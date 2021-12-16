import axios from 'axios'
export default{
    
state: {
    productos: []
},
mutations: {
    setProductos(state, productos){
        state.productos = productos
}
},
actions: {
    getProductos({ commit }){
        axios.get('producto/')
        .then(productos => {
            commit("setProductos", productos.data);          
        });
    }
},
getters:{
    productosStock(state){
        return state.productos.filter(producto => {
            return producto.stock > 0;
        });
    },
    productosCategoria: (state) => (categoria) => {
        return state.productos.filter( producto => {
            return producto.stock > 0 && producto.id_categoria == categoria
        })
    },
    detalleProducto: (state) => (id) => {
        return state.productos.filter( producto => producto.id == id )
    }
},

}
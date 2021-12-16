<template>
    <div>
        <card-productos-header v-for="categoria in categorias" :key="categoria" 
        :imagen="categoria.imagen" :nombre="categoria.nombre"/>
        <div class="container-fluid py-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-around ">
                <card-productos v-for="producto in productosCategoria" :key="producto"
                :imagen="producto.imagen" :nombre="producto.nombre" :categoria="producto.id_categoria"
                :marca="producto.marca" :precio="producto.precio" :id="producto.id"/>
            </div>
        </div>
    </div>
</template>

<script>
import CardProductos from '../components/CardProductos.vue'
import CardProductosHeader from '../components/CardProductosHeader.vue'

export default {
  components: { CardProductosHeader, CardProductos },
    name: 'ProductosCategoria',
    computed: {
        productosCategoria(){
            return this.$store.getters.productosCategoria(this.$route.params.categoria)
        },
        categorias(){
            return this.$store.getters.categoriaDinamica(this.$route.params.categoria)
        },
    },
    async created(){
        try {
            await this.$store.dispatch('getProductos')
            await this.$store.dispatch('getProductoCategoria')
        } catch (error){
            console.log(error)
        }

    }   
}
</script>
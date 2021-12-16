<template>
    <div class="py-1">
        <card-producto-detalle v-for="producto in detalle" :key="producto"
        :imagen="producto.imagen" :nombre="producto.nombre" :descripcion="producto.descripcion"
        :marca="producto.marca" :categoria="producto.id_categoria" :precio="producto.precio"
        :stock="producto.stock"/>

        <div>
            <h1>Productos relacionados</h1>
        </div>

        <div>
            
        </div>
    </div>
</template>

<script>
import CardProductoDetalle from '../components/CardProductoDetalle.vue'

export default {
  components: { CardProductoDetalle },
    name: 'DetalleProducto',
    component: {
        CardProductoDetalle
    },
    computed: {
        detalle(){
            return this.$store.getters.detalleProducto(this.$route.params.id)
        }
    },
    async created(){
        try {
            await this.$store.dispatch('getProductos')
        } catch (error){
            console.log(error)
        }
    }
}
</script>
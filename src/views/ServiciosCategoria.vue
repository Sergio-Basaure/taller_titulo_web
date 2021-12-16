<template>
    <div>
        <card-productos-header v-for="categoria in detalleCategoria" :key="categoria"
        :imagen="categoria.imagen" :nombre="categoria.nombre"/>
        <div class="container-fluid py-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-around ">
                <card-productos v-for="servicio in servicios" :key="servicio"
                :imagen="servicio.imagen" :nombre="servicio.nombre" :marca="servicio.marca"
                :categoria="servicio.id_categoria" :precio="servicio.precio" :id="servicio.id"/>
            </div>
        </div>
    </div>
</template>

<script>
import CardProductos from '../components/CardProductos.vue'
import CardProductosHeader from '../components/CardProductosHeader.vue'
export default {
  components: { CardProductosHeader, 
    CardProductos  },
    name: 'ServicoCategoria',
    computed: {
        detalleCategoria(){
            return this.$store.getters.detalleCategoria(this.$route.params.categoria)
        },
        servicios(){
            return this.$store.getters.detalleServicio(this.$route.params.categoria)
        }
    },
    async created(){
        try {
            await this.$store.dispatch('getServicioCategoria')
            await this.$store.dispatch('getServicio')
        }catch (error){
            console.log(error)
        }
    }
}
</script>
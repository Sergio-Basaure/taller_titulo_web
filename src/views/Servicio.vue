<template>
    <div>
        <card-productos-header :imagen="img" :nombre="titulo"/>
        <div  class="container-fluid py-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-around ">
                <card-servicio v-for="servicio in servicios" :key="servicio"
                :imagen="servicio.imagen" :nombre="servicio.nombre" :descripcion="servicio.descripcion"
                :precio="servicio.precio" :id="servicio.id"/>
            </div>
        </div>
    </div>
</template>
<script>
import CardServicio from '../components/CardServicio.vue'
import CardProductosHeader from '../components/CardProductosHeader.vue'
export default {
    name: 'Servicios',
    data(){
        return {
            titulo: 'Servicios',
            img : 'https://p1.piqsels.com/preview/339/488/34/fitness-studio-fitness-sport-train-gym.jpg',
        }
    },
    components: { CardServicio,  
    CardProductosHeader},
    computed:{
        servicios(){
            return this.$store.getters.servicios
        }
    },
    async created(){
        try {
            await this.$store.dispatch('getServicio')
        } catch(error){
            console.log(error)
        }
    }
}
</script>
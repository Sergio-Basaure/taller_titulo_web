<template>
    <div>
        <card-detalle-local v-for="loc in local" :key="loc"
        :imagen="loc.imagen" :nombre="loc.nombre" :direccion="loc.direccion"
        :contacto="loc.contacto" :maximo="loc.aforo_maximo" :actual="aforo_actual"/>
    </div>
</template>
<script>
import CardDetalleLocal from '../components/CardDetalleLocal.vue'
export default {
    name: 'DetalleLocal',
    components: {
        CardDetalleLocal
    },
    computed: {
        local(){
            return this.$store.getters.getLocalObj(this.$route.params.id)
        }
    },
}
</script>
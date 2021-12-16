<template>
    <div>
        <card-productos-header :imagen="img" :nombre="titulo"/>
        <div class="container-fluid py-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-around ">
                <card-productos v-for="producto in productos" :key="producto"
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
    name: 'Productos',
    components : {
        CardProductos,
        CardProductosHeader
    },
    data(){
        return {
            titulo : 'Productos',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wWRyDUtd6nwuid06ziur7Y2C1QsLVrrD1g&usqp=CAU'
        }
    },
    computed:{
        productos(){
            return this.$store.getters.productosStock;
        }
    },
    async created(){
        try {
            await this.$store.dispatch('getProductos')
        } catch(error){
            console.log(error)
        }
    }
}
</script>
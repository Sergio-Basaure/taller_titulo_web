<template>
  <div>
    <div>
    <carousel />
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-around ">
        <card v-for="loc in locales" :key="loc"
        :nombre= "loc.nombre" :direccion= 'loc.direccion' :contacto= "loc.contacto" :imagen= "loc.imagen"
        :aforo_maximo="loc.aforo_maximo" :aforo_actual="loc.aforo_actual" :id="loc.id"/>
      </div>
    </div>
    
  </div>


</template>

<script>
import Card from '../components/CardLocal.vue'
import Carousel from '../components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Card,
  },
  methods: {
    getLocalApi(){
      this.$store.dispatch('getLocalApi')
    }
  },
  computed: {
    locales(){
      return this.$store.getters.getLocal
    }
  },
  created(){
    setInterval(() => {
      this.$store.dispatch('getLocalApi')
    }, 3000)
      
  }
}
</script>

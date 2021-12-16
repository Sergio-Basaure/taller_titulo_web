<template>
  <div class="container-fluid m-0 p-0">
    <header-custom />
    <div v-if="mensaje">
      <mensaje :mensaje="mensaje"/>
    </div>
    <modal-reclamo />
    <router-view />
    <footer-custom />
  </div>
</template>

<script>
import HeaderCustom from './components/HeaderCustom.vue'
import Mensaje from './components/Mensaje.vue'
import ModalReclamo from './components/ModalReclamo.vue'
import FooterCustom from './components/FooterCustom.vue'
export default {
  components: {
    HeaderCustom,
    ModalReclamo,
    Mensaje,
    FooterCustom,
  },

  computed: {
    mensaje(){
      return this.$store.getters.mensajeExitoso
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

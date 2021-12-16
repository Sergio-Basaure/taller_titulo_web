<template>
    <div>
        <qrcode-stream :camera="camara" @decode="decode" @init="onInit">
            <div v-if="validador == true" class="validation-success">
                <h3>{{ mensaje }}</h3>
            </div>
            <div v-if="validador == false" class="validation-failure">
                <h3>{{ mensaje }}</h3>
            </div>
            <div v-if="loadingTrue" class="validation-pending">
                <h3>Por favor espere, procesando codigo QR</h3>
            </div>
        </qrcode-stream>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader'
export default {
  components: { QrcodeStream },
  computed: {
    camara () {
        return this.$store.getters.camara
    },

    mensaje () {
        return this.$store.getters.mensaje
    },

    validador () {
        return this.$store.getters.validador
    },
    loadingTrue(){
        return this.validador === undefined && this.camara == 'off'
    }
  },
  methods: {
    onInit (promise) {
      promise
        .catch(console.error)
        .then(this.resetValidationState)
    },

    resetValidationState () {
        let estado = undefined
        this.$store.commit('setValidador', estado)
        this.$store.commit('setMensaje', estado)
    },

    estadoLoading () {
        let estado = 'off'
        this.$store.commit('setCamara', estado)
    },

    async decode (decodeString) {
      this.estadoLoading()
      await this.timeout(2000)
      this.$store.dispatch('buscarQr', decodeString)
      await this.timeout(3000)
      this.encenderCamara()
      this.resetValidationState()
    },
    
    encenderCamara () {
      let estado = 'auto'
      this.$store.commit('setCamara', estado)
    },

    timeout (ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    },
  }
}
</script>

<style scoped>

.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>

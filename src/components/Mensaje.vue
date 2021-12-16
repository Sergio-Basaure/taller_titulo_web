<template>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ mensaje }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script>
export default {
    name: 'Mensaje',
    props : ['mensaje',],
    methods: {
        cambiarMensaje(){
            let mensajeNull = null
            this.$store.commit('setMensajeExitoso', mensajeNull)
        }
    }
}
</script>
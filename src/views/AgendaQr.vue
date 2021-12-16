<template>
    <div class="container-fluid">
        <h1>¿Tienes una reserva?</h1>
        <br>
        <h2>Escanea tu codigo QR aqui!!</h2>
        <div class="row g-0 justify-content-center">
        <div class="col col-md-4 ">
            <qrdecode/>
        </div>
        </div>
    </div>
</template>

<script>
import QrDeccode from '../components/QrDecode.vue'
export default {
    name: 'AgendaQr',
    components: {
        qrdecode: QrDeccode
    }
}
</script>
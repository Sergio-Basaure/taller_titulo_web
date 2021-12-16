<template>
<div class="container-md pt-3">
    <form action="">
<div class="row g-3">
    <h5>Datos Personales</h5>
    <hr>
    <div class="row g-3 justify-content-around">
        <div class="col-md-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" :value="cliente.nombres">
        </div>
        <div class="col-md-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" :value="cliente.apellidos">
        </div>
        <div class=" col-md-3">
            <label for="rut" class="form-label">Rut</label>
            <input type="text" class="form-control" id="rut" :value="cliente.rut" disabled readonly>
        </div>
    </div>
    <hr>
    </div>

    <div class="row g-3 mt-4">
        <h5>Datos de contacto</h5>
        <hr>  

            <div class="row g-3 justify-content-around">

                <div class="col-md-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" :value="cliente.email" disabled readonly>
                </div>


                <div class="col-md-3">
                    <label for="contacto" class="form-label">Contacto</label>
                    <input type="number" class="form-control" id="contacto" :value="cliente.contacto">
                </div>
            </div>
</div>
<div class="row g-3 justify-content-end">
    <div class="col-md-3 py-5">
        <button type="submit" class="btn btn-primary">Actualizar</button>
    </div>
    
    </div>  

    </form>
</div>
</template>
<script>
export default {
    name: 'Usuario',
    computed: {
        cliente(){
            return this.$store.getters.usuario
        }
    }
}
</script>
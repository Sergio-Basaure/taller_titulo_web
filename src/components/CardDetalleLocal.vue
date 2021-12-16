<template>
    <!-- <div class="container-fluid"> -->
        <div class="card mb-3"> 
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="imagen" class="img-fluid rounded-start" style="height:50vh"  :alt="nombre">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ nombre }}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Dirección:</strong> {{ direccion }}</li>
                            <li class="list-group-item"><strong>Contacto:</strong> {{ contacto }}</li>
                            <li class="list-group-item"><strong>Aforo maximo:</strong> {{ maximo }}</li>
                            <li class="list-group-item"><strong>Aforo Actual:</strong> {{ actual }}</li>
                            <li class="list-group-item"><strong>Horario de atencion:</strong> lunes - domingo
                            de 08:00 am a 21:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>
<script>
export default {
    name: 'CardDetalleLocal',
    props: ['imagen', 'nombre', 'direccion', 'contacto', 'maximo', 'actual']
    
}
</script>
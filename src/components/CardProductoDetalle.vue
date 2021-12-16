<template>
    <div class="card mb-3 shadow">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="imagen" class="img-fluid rounded-start" style="height:50vh" :alt="nombre">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h2 class="card-title">{{ nombre }}</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <strong>Descripción:</strong> {{ descripcion }}</li>
                        <li class="list-group-item"><strong>Marca:</strong> {{ marca }} </li>
                        <li class="list-group-item"><strong>Categoria:</strong> {{ categoria }} </li>
                        <li class="list-group-item"><strong>Precio: </strong> {{ precio }} </li>
                        <li class="list-group-item"><strong>Disponibles: </strong> {{ stock }} </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetalleProducto',
    props: {
        imagen : String,
        nombre : String,
        descripcion : String,
        marca : String,
        precio : Number,
        stock : Number,
        categoria : String
    }   
}
</script>
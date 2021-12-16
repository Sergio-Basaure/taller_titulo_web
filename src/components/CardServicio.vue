<template>
    <div class="card shadow " style="width: 18rem;">
        <img :src="imagen" class="card-img-top img-fluid overflow-auto border-dark" style="height:40%" :alt="nombre">
        <div class="card-body">
            <h5 class="card-title">{{nombre}}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Nombre: </strong>{{ nombre }}</li>
                <li class="list-group-item"><strong>Descripción: </strong>{{ descripcion }}</li>
                <li class="list-group-item"><strong>Precio: $</strong>{{ precio }}</li>
                <button class="btn btn-info">
                    <router-link style="color:white; text-decoration:none" 
                    :to="{name: 'DetalleProducto', params:{id: id}}">Ver Detalle
                    </router-link>
                </button>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardServicio',
    props: ['imagen', 'nombre', 'descripcion', 'precio', 'id']
}
</script>
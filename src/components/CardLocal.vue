<template>
    <div class="col">
      <div class="card h-100 shadow">
        <img :src="imagen" class="card-img-top" alt="..." style="height:150px">
        <div class="card-body h-100">
  <ul class="list-group list-group-flush ">
    <li class="list-group-item"><strong>Dirección:</strong> {{direccion}}</li>
    <li class="list-group-item"><strong>Contacto:</strong> {{contacto}}</li>
    <li class="list-group-item"><strong>Aforo Máximo:</strong> {{aforo_maximo}}</li>
    <li class="list-group-item"><strong>Aforo Actual:</strong> {{aforo_actual}}</li>
    <!-- <li class="list-group-item">
      <a href="#" class="btn btn-info">Detalle</a>
    </li>
    <button class="btn btn-info">
        <router-link style="color:white; text-decoration:none" 
        :to="{name: 'DetalleLocal', params: {id: id}}">
          Ver Local
        </router-link>
    </button> -->
  </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    nombre : String,
    direccion: String,
    contacto: Number,
    imagen: String,
    aforo_maximo: Number,
    aforo_actual: Number,
    id: Number
  }
}
</script>
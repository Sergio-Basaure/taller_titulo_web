<template>
    <div class="container-fluid p-0 ">
        <div class="card bg-dark text-white " style="height: 15rem">
            <img :src="imagen" class="card-img img-fluid overflow-auto opacity-50 " :alt="nombre">
            <div class="card-img-overlay ">
                <h1 class="card-title  ">{{ nombre }}</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardProductosHeader',
    props : ['imagen', 'nombre']
}
</script>
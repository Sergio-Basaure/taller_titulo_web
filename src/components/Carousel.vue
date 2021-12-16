<template>
<div class="container-fluid d-inline-block">
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner" >


    <div v-for="(local, index) in locales" :key="index"
    :class="{'carousel-item': true, 'active': index === active}">
      <img :src="local.imagen" class="img-fluid overflow-auto" style="width: 100%; height:50vh; object-fit:fill"
      :alt="local.nombre">
    </div>

  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>



</template>

<script>



export default {

    name: 'Carousel',
    data(){
      return{
        locales: [],
        active : 0
      }
    },
    methods: {
      getLocales(){
        this.axios.get('local')
          .then(resolve =>{
            return this.locales = resolve.data
          })
      },
      activar(index){
        let active = index
        if (index === this.locales.length) active = 0;
        else if(index === -1) active = this.locales.length -1;
        this.active = active
      }
    },
    created(){
      this.getLocales()
    },

}
</script>
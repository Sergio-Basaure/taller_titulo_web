<template>
    <div class="modal fade" id="reclamos" tabindex="-1" aria-labelledby="reclamosLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="reclamos">Reclamos y Sugerencias</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="ingresoReclamo">
      <div class="modal-body">

      <div class="container-fluid mb-3" v-if="imagenModal"> 
        <div v-for="loc in locales" :key="loc">
          <div v-if="loc.id == imagenModal">
            <img class="img-fluid w-100" style="height: 150px; object-fit:fill" :src="loc.imagen" :alt="loc.nombre">
        </div>
      </div>
      </div>

        <div class="form-floating mb-3">
  <select class="form-select" id="id_local_id" aria-label="Floating label select example" v-model="id_local_id">
    <option v-for="local in locales" :key="local" :value="local.id">{{ local.nombre }}</option></select>
      <label for="id_local_id">Seleccione Sucursal</label>
        </div>
        <div class="form-floating mb-3" v-if="id_local_id" >
  <select class="form-select" id="id_tipo_id" aria-label="Floating label select example" v-model="id_tipo_id">
    <option v-for="categoriaReclamo in categoriaReclamo" :key="categoriaReclamo" :value="categoriaReclamo.id">
        {{ categoriaReclamo.nombre }}
        </option></select>
      <label for="id_tipo_id">Seleccione Reclamo o Sugerencia</label>
        </div>
<div class="form-floating" v-if="id_tipo_id">
  <textarea class="form-control" placeholder="Leave a comment here" id="descripcion" style="height: 100px"
  v-model="descripcionForm"></textarea>
  <label for="comentario">Comentario</label>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        <button v-if="descripcionForm" type="submit" class="btn btn-primary">Enviar</button>
      </div>
</form>
    </div>
  </div>
</div>
</template>

<script>


import { Modal } from 'bootstrap';

export default {
    name: 'ModalReclamo',
    data(){
        return {
            id_local_id : null,
            id_tipo_id : null,
            descripcionForm : null,

            modalReclamos: null,
           imagen: null
        }
    },
    computed: {
        categoriaReclamo(){
            return this.$store.getters.getCategoriaReclamo
            
        },
        locales(){
            return this.$store.getters.getLocal
        },
        imagenModal(){
          return this.id_local_id
        }
    },
    methods: {
        async ingresoReclamo(){
            let payload = {
                id_local : this.id_local_id,
                id_tipo : this.id_tipo_id,
                descripcion : this.descripcionForm
            };
            try {
              await this.$store.dispatch('ingresoReclamoApi', payload)
              this.id_tipo_id = null
              this.id_tipo_id = null
              this.descripcionForm = null
              this.modalReclamos.hide()
            }catch(error){
              console.log(error.response)
            }
        }
    },
    async created(){
        try{
          await this.$store.dispatch('getCategoriaReclamoApi')
          await this.$store.getters.getLocal

        }catch(error){
          console.log(error)
        }
    },
    mounted() {
      this.modalReclamos = new Modal(document.getElementById('reclamos'))
    }
}
</script>
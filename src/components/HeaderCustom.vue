<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid ">
      <div class="row w-100">
        <div class="col-12">
        <router-link class="navbar-brand" to="/">CCS</router-link>
        </div>
        <div class="w-100"></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
          <div class="col-6">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
              <router-link class="nav-link active" to="/">Inicio</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="categoriaproductos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="categoriaproductos">
                  <li><router-link class="dropdown-item" to="/productos">Todos los Productos</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item disabled" href="#">Categorias</a></li>
                  <li v-for="categoria in productoCategoria" :key="categoria"><router-link 
                  class="dropdown-item" :to="{name: 'ProductosCategoria', params:{categoria: categoria.id}}">{{ categoria.nombre }}</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="categoriaproductos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul class="dropdown-menu" aria-labelledby="categoriaproductos">
                  <li><router-link class="dropdown-item" to="/servicios">Todos los Servicios</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item disabled" href="#">Categorias</a></li>
                  <li v-for="categoria in servicioCategoria" :key="categoria"><router-link 
                  class="dropdown-item" :to="{name: 'ServiciosCategoria', params:{categoria: categoria.id}}">{{ categoria.nombre }}</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/agenda_qr">Agenda QR</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/aforo">Aforo</router-link>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end">
              <li class="nav-item">
                <router-link v-if="!credenciales" class="nav-link" to="/login">Iniciar Sesion</router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="!credenciales" class="nav-link" to="/registro">Registrate</router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="credenciales" class="nav-link" to="/agenda">Agendar Hora</router-link>
              </li>
              <li class="nav-item">
              <a role="button" class="nav-link" style="text-decoration: None"
               v-if="credenciales" data-bs-toggle="modal" 
              data-bs-target="#reclamos">Reclamos y Sugerencias</a>
              </li>
              <li v-if="credenciales" class="nav-item dropdown dropstart">
                <a class="nav-link dropdown-toggle " href="#" id="menucliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ cliente.nombres }}
                </a>
                <ul class="dropdown-menu"  aria-labelledby="menucliente">
                  <li><router-link class="dropdown-item" to="/Usuario">Perfil</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" @click.prevent="cerrarSesion()">Cerrar Sesión</a></li>
                </ul>
              </li>

<!-- metodo de logout -->


            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
    name: 'HeaderCustom',
    computed: {
      productoCategoria(){
        return this.$store.getters.productoCategorial
      },
      servicioCategoria(){
        return this.$store.getters.servicioCategoria
      },
      credenciales(){
        return this.$store.getters.credenciales
      },
      cliente(){
        return this.$store.getters.usuario
      }

    },
    methods : {
      cerrarSesion(){
      this.$store.commit('setCredenciales', false),
      localStorage.removeItem("token")
      this.$store.commit('setUsuario', "")
      this.$router.push('/')
    }
    },
    async created(){
      try {
        await this.$store.dispatch('getProductoCategoria')
        await this.$store.dispatch('getServicioCategoria')
      } catch (error){
        console.log(error)
      }
      
    },

}
</script>
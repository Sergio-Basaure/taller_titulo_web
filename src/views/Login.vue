<template>
    <div class="login">
        <div class="container-md py-4">
            <div class="row justify-content-center">
                <div class="col col-md-6 ">
                    <div class="card shadow">
                        <img src="logo2.png" class="card-img-top img-fluid" alt="ccs-logo">
                        <div class="card-body">
                            <h5 class="card-title">Inicio de Sesión</h5>
                            <form @submit.prevent="iniciarSesion" class="form-floating">
                                <div class="mb-2" style="color: red">
                                    {{errorMensaje.error}}
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required
                                    v-model="email" >
                                    <label for="email">Correo electronico</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="password" placeholder="Password" required
                                    v-model="password" >
                                    <label for="password">Contraseña</label>
                                </div>
                                <router-link class="btn btn-danger m-3" to="/">Cancelar</router-link>
                                <button type="submit" class="btn btn-primary m-3">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data (){
        return {    
            email: undefined,
            password: undefined
        }
    },
    computed: {
        errorMensaje(){
            return this.$store.getters.errorMensaje
        }
    },
    methods: {
        async iniciarSesion(){
            const payload = {
                email: this.email,
                password: this.password
            };
        await this.$store.dispatch('getUsuario',payload)
        
        }
    }
}
</script>
<template>
    <div class="container-md shadow col-6 mt-5">
        <img class="img-fluid d-inline-flex" src="logo2.png" alt="">
        <div>
        <span><h3>Registro de cliente</h3></span>
        </div>
        <form @submit.prevent="regitroCliente" novalidate>
           <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email" required>
                <label for="email">Correo electronico</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
                <label for="password">Contraseña</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="rut" placeholder="XXXXXXXX-X" v-model="rut" required>
                <label for="rut">Rut</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="nombre" placeholder="Nombre" v-model="nombres" required>
                <label for="nombre">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="apellido" placeholder="Apellido" v-model="apellidos" required>
                <label for="apellido">Apellido</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="contacto" placeholder="Conatcto" v-model="contacto" required>
                <label for="contacto">Contacto</label>
            </div>
                <router-link class="btn btn-danger m-3" to="/">Cancelar</router-link>
                <button type="submit" class="btn btn-primary m-3">Registrar</button>
        </form>
    </div>

</template>

<script>
export default {
    name: 'Registro',
    data() {
        return{
            email: "",
            password: "",
            rut: "",
            nombres: "",
            apellidos: "",
            contacto: null,
            errors : []
        }
    },
    methods: {
        regitroCliente(){
            const payload = {
                email: this.email,
                password: this.password,
                rut: this.rut,
                nombres: this.nombres,
                apellidos: this.apellidos,
                contacto: this.contacto
            };
            this.axios.post('registro/', payload)
            .then(resolve => {
                if (resolve.status == 201){
                    
                    this.$router.push('/')
                }
            })
            .catch(function (error) {
                if(error.response == undefined){
                    console.log("error servidor")
                }else if(error.response.status == 400){
                    this.errors = error.response.data
                }
        })
    }
    }
}
</script>
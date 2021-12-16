<template>
    <div class="container-fluid" v-for="loc in local" :key="loc">
        <div class="row justify-content-center py-4">
            <div class="col col-md-9">
                <div class="card text-center">
                    <div class="card header" >
                        <h1>{{ loc.nombre }}</h1>
                    </div>
                    <div class="card-body">
                        <h2 :style="{color : colorAforo}">Aforo Actual {{ loc.aforo_actual }}</h2>
                    </div>
                    <div class="card-footer text-muted">
                        <h3>Aforo Maximo {{ loc.aforo_maximo }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'aforo',
    computed: {
        local(){
            return this.$store.getters.getLocalObj(3)
        },
        colorAforo(){
             let aforoActual = this.local[0]
            if(aforoActual.aforo_actual > 180 && aforoActual.aforo_actual < 200){
                return 'yellow'
            }else if(aforoActual.aforo_actual === 200){
                return 'red'
            }else{
                return 'black'
            }
        },
    },
    created(){
        setInterval(() => {
            this.$store.dispatch('getLocalApi')
        }, 3000)
    }
}
</script>
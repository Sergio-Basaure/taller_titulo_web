<template>
    <div class="container-fluid mb-3">
        <form @submit.prevent="agendarHora">
            <div class="row mb-3 shadow">
                <div>
                    <h2>Agenda de Hora</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3 mb-3">
                        <div class="form-floating">
                            <select class="form-select" id="id_local" aria-label="Floating label select example"
                            v-model="local">
                                <option v-for="loc in locales" :key="loc" :value="loc.id">{{ loc.nombre }}</option>
                            </select>
                            <label for="id_local">Seleccione Sucursal</label>
                        </div>
                    </div>
                </div>
            <div class="col-md-3 mb-3" v-if="local">
                <card-local class="h-100" :nombre="localObj.nombre" :direccion="localObj.direccion" :contacto="localObj.contacto"
                :imagen="localObj.imagen" :aforo_actual="localObj.aforo_actual" :aforo_maximo="localObj.aforo_maximo"/>
            </div>
            <div class="col-md-6 mb-3">
                <div class="row">
                    <div style="color: red">
                        {{errorCampo('fecha')}}
                    </div>
                    <div class="form-label">
                        <div class="col-md mb-3" v-if="local">
                            <DatePicker is-expanded mode="date" v-model="date" :min-date='new Date()'
                            :model-config="modelConfig"/>
                        </div>
                    </div>
                    <div class="row">
                        <div style="color: red">
                            {{errorCampo('id_hora')}}
                        </div>  
                        <div class="col-md mb-3 h-100" v-if="local">
                            <div class="list-group">
                                <button type="button" class="list-group-item list-group-item-action active disabled h6" aria-current="true">Hora</button>
                                <div class="row">
                                    <div class="col-2" v-for="hora in horas" :key="hora">
                                        <button type="button" v-on:click="setValue(hora.hora.slice(0,-3), hora.id)"
                                        class="list-group-item list-group-item-action h6" >{{ hora.hora.slice(0,-3)}}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col-md-3 mb-3 border-2" v-if="local">
                    <lista-agenda :nombre="`${cliente.nombres} ${cliente.apellidos}`"
                    :nombreLocal="localObj.nombre" :direccionLocal="localObj.direccion" :dia="date" :hora="hora"/>
                    <div>
                        <button class="btn btn-primary" type="submit">Agendar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import CardLocal from '../components/CardLocal.vue'
import { DatePicker } from 'v-calendar'
import ListaAgenda from '../components/ListaAgenda.vue'

export default {
  components: { CardLocal,
    DatePicker,
    ListaAgenda
   },
    name: 'Agenda',
    data () {
        return {
            date: null,
            local: null,
            hora: null,
            id_hora: null,
            modelConfig: {
            type: 'string',
            mask: 'YYYY-MM-DD',
            errorMensaje: null
        },
        }
    },
    computed: {
        locales(){
            return this.$store.getters.getLocal
        },
        localObj(){
            if(this.local){
                const obj = this.$store.getters.getLocalObj(this.local)
                let loc = obj[0]
                return loc
            }else{
                return this.$store.getters.getLocalObj(this.local)
            }
        },
        horas(){
            return this.$store.getters.hora
        },
        cliente(){
            return this.$store.getters.usuario
        },
        errorMensaje(){
            return this.$store.getters.errorMensaje
        },

    },
    methods: {
        setValue(value, id){
            this.hora = value
            this.id_hora = id
        },
        agendarHora(){
            const payload = {
                fecha : this.date,
                id_hora : this.id_hora,
                id_local : this.local,
                id_cliente : this.cliente.id
            } 
            this.$store.dispatch('agendaApi', payload)
            
        
        },
        errorCampo(value){
            const e = this.errorMensaje
            for(let a in e){
                if(a == value){
                    console.log(`${a} : ${e[a]}`)
                    console.log(`${e[a]}`)
                    let o = `${e[a]}`
                    return o
                }
            }
        }

    },
    async created(){
        try {
            await this.$store.dispatch('getHoraApi')
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
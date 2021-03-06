import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import './configuracion/axiosConfiguracion.js'

createApp(App)
.use(store)
.use(router)
.use(VueAxios,axios)
.mount('#app')

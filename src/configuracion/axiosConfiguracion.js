import axios from "axios"

axios.defaults.baseURL = 'https://ccsapi.herokuapp.com/api/'

if(localStorage.getItem('token')){
    axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
}

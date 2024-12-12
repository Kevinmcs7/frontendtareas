import axios from "axios";

const instance = axios.create ({
    baseURL: 'http://backendtareas.vercel.app/api',
    withCredentials: true 
})

export default instance
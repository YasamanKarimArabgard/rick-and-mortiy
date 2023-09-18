import axios from "axios";

axios.defaults.baseURL = 'https://rickandmortyapi.com'

const http = {
    get: axios.get,
}

export default http;
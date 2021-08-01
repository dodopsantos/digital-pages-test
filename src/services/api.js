import axios from 'axios'

const api = axios.create({
  baseURL: 'http://pocs.digitalpages.com.br'
})

export default api

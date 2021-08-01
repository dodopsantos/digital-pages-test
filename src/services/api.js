import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pocs.digitalpages.com.br'
})

export default api

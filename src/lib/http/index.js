import axios from 'axios'

const http = axios.create({
  timeout: 5000
})

http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject()
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default http

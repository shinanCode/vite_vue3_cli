import Axios from 'axios'

let baseURL: string = ''

const axios = Axios.create({
  baseURL,
  timeout: 15000
})

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios

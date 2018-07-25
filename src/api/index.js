import axios from 'axios'

const baseURL =  'http://localhost:8888/api/private/v1/'

axios.defaults.baseURL = baseURL

//  请求拦截器,给所有的请求加上token
axios.interceptors.request.use(function(config) {
  let token = localStorage.getItem('mytoken')
  if(token){
    config.headers['Authorization'] = token
  }
  return config
},function (error){
  return Promise.reject(error)
})

export const checkUser = params =>{
  return axios.post('login',params).then(res=>res.data)
}
export const getUserList = params =>{
  return axios.get('users',params).then(res => res.data)
}
export const changeUserState = params =>{
  return axios.put(`users/${params.uid}/state/${params.type}`).then(res=>res.data)
}
export const addUser = params =>{
  return axios.post('users',params).then(res=>res.data)
}
export const getUserById = params =>{
  return axios.get(`users/${params}`).then(res =>res.data)
}
export const editUser = params =>{
  return axios.put(`users/${params.id}`,params).then(res =>res.data)
}
export const deleteUser = params =>{
  return axios.delete(`users/${params}`).then(res=>res.data)
}
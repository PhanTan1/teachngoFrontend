import axios from 'axios'

const token = window.sessionStorage.getItem('token')

export const client = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Authorization': 'Bearer ' + token
  }
})

export const visitor = axios.create({
  baseURL: 'http://localhost:8080/'
})
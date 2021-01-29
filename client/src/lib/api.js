import axios from 'axios'

//*Base URL
const baseUrl = '/api/'

//*Register a user
export function registerUser(formdata){
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

//*Logs a user in
export function loginUser(formdata){
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}
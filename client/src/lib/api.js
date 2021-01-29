import axios from 'axios'
import { getToken } from './auth'

//*Sets a users token into the request header
function headers(){
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

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

//*Gets all posts
export function getAllPosts(){
  return axios.get(`${baseUrl}/posts`)
}

//*Post a comment on a post
export function postComment(formdata){
  return axios.post(`${baseUrl}comments/`, formdata, headers())
}
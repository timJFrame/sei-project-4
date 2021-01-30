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
  return axios.post(`${baseUrl}auth/register/`, formdata)
}

//*Logs a user in
export function loginUser(formdata){
  return axios.post(`${baseUrl}auth/login/`, formdata)
}

//*Gets all posts
export function getAllPosts(){
  return axios.get(`${baseUrl}posts`)
}

//*Post a post
export function postUserPost(formdata){
  return axios.post(`${baseUrl}posts/`, formdata, headers())
}

//*Get Single Post
export function getSinglePost(id){
  return axios.get(`${baseUrl}posts/${id}/`, headers())
}

//*Edit a single job
export function editSinglePost(id, formdata){
  return axios.put(`${baseUrl}posts/${id}/`, formdata, headers())
}

//*Post a comment on a post
export function postComment(formdata){
  return axios.post(`${baseUrl}comments/`, formdata, headers())
}

//*Like a post
export function postLike(id){
  return axios.post(`${baseUrl}posts/${id}/like/`, null, headers())
}
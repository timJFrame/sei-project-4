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

//*Gets a single users profile
export function getSingleUser(id){
  return axios.get(`${baseUrl}auth/user/${id}`, headers())
}

//*Delete a single user 
export function deleteSingleUser(id){
  return axios.delete(`${baseUrl}auth/user/${id}`, headers())
}

//* The profile of the user currently logged in
export function getCurrentUser(){
  return axios.get(`${baseUrl}auth/profile/`, headers())
}

//*Gets all users
export function getAllUsers(){
  return axios.get(`${baseUrl}auth`)
}


//*Friends a user
export function friendUser(id){
  return axios.post(`${baseUrl}auth/user/${id}/friend/`, null, headers())
}

//*Gets all posts
export function getAllPosts(){
  return axios.get(`${baseUrl}posts`)
}

//*Post a post
export function postUserPost(formdata){
  return axios.post(`${baseUrl}posts/`, formdata, headers())
}

//*Edit a post
export function editSinglePost(id, formdata){
  return axios.put(`${baseUrl}posts/${id}/`, formdata, headers())
}

//*Delete a single post
export function deleteSinglePost(id){
  return axios.delete(`${baseUrl}posts/${id}/`, headers())
}

//*Get a single post
export function getSinglePost(id){
  return axios.get(`${baseUrl}posts/${id}/`, headers())
}


//*Post a comment on a post
export function postComment(formdata){
  return axios.post(`${baseUrl}comments/`, formdata, headers())
}

//*Deletes a comment on a post
export function deleteComment(id){
  return axios.delete(`${baseUrl}comments/${id}/`, headers())
}

//*Like a post
export function postLike(id){
  return axios.post(`${baseUrl}posts/${id}/like/`, null, headers())
}

//*Starts a chat between users
export function postChat(data){
  return axios.post(`${baseUrl}chats/`, data, headers())
}

//*Sends a message from one user to another
export function postMessage(formdata){
  return axios.post(`${baseUrl}communications/`, formdata, headers())
}

//*Delete a chat
export function deleteChat(id){
  return axios.delete(`${baseUrl}chats/${id}/`, headers())
}
import axios from 'axios'


//*Base URL
const baseUrl = '/api/'

//*Register a user

export function registerUser(formdata){
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}
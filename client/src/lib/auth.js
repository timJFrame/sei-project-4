//*Sets a user token into local storage
export function setToken(token){
  window.localStorage.setItem('token', token)
}

//*Gets a user token from local storage
export function getToken(){
  return window.localStorage.getItem('token')
}
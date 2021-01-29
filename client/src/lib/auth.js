//*Sets a user token into local storage
export function setToken(token){
  window.localStorage.setItem('token', token)
}

//*Gets a user token from local storage
export function getToken(){
  return window.localStorage.getItem('token')
}

//*Logs user out
export function logout(){
  window.localStorage.removeItem('token')
}

//*Gets payload from token
function getPayLoad(){
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 2) return false
  return JSON.parse(atob(parts[1]))
}

//*Checks is a user is Authenticated
export function isAuthenticated(){
  const payload = getPayLoad()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

//*Gets a users id from token in local storage
export function getUserId(){
  return getPayLoad.sub()
}

//*Checks if the user that is logged in is the owner of what they are trying to edit or delete
export function isOwner(userId){
  const payload = getPayLoad()
  if (!payload) return false
  return userId === payload.sub()
}
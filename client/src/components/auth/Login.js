import React from 'react'

function Login(){
  return (
    <section className="form-container">
      <form>
        <fieldset>
          <label>Email</label>
          <input type="text" placeholder="Email"/>
          <label>Email</label>
          <input type="password" placeholder="Email"/>
          <input className="button-outline form-sumbit full-length-button" type="submit" value="Login"/>
        </fieldset>
      </form>
    </section>
  
  
  )
}

export default Login
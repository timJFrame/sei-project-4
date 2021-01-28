import React from 'react'

function Register(){
  return (
    <section className="form-container">
      <form>
        <fieldset>
          <label>Username</label>
          <input type="text" placeholder="Username"/>
          <label>Email</label>
          <input type="text" placeholder="Email"/>
          <label>Password</label>
          <input type="password" placeholder="Password"/>
          <label>Password Confirmation</label>
          <input type="password" placeholder="Password Confirmation"/>
          <label>Bio</label>
          <textarea placeholder="Tell why you love gardening"/>
          <label>Profile Photo</label>
          <input type="file"/>
        </fieldset>
        <input className="button-outline form-sumbit full-length-button" type="submit" value="Register"/>
      </form>
    </section>
  
  )
}

export default Register
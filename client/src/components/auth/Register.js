import React from 'react'

function Register(){

  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    bio: '',
    profile_image: ''
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  console.log(formdata)

  return (
    <section className="form-container">
      <form>
        <fieldset>
          <label>Username</label>
          <input type="text" 
            name="username"
            value={formdata.username}
            onChange={handleChange}
            placeholder="Username"/>


          <label>Email</label>
          <input type="text" 
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Email"/>


          <label>Password</label>
          <input type="password" 
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Password"/>


          <label>Password Confirmation</label>
          <input type="password"
            name="password_confirmation"
            value={formdata.password_confirmation}
            onChange={handleChange}
            placeholder="Password Confirmation"/>


          <label>Bio</label>
          <textarea
            name="bio"
            value={formdata.bio}
            onChange={handleChange}
            placeholder="Tell why you love gardening"/>
          <label>Profile Photo</label>
          <input type="file"/>


        </fieldset>
        <input className="button-outline form-sumbit full-length-button" type="submit" value="Register"/>
      </form>
    </section>
  
  )
}

export default Register
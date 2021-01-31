import React from 'react'
import useForm from '../../utils/useform'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken  } from '../../lib/auth'


function Login(){

  const history = useHistory()


  //* Captures a users data from login form and stores it in state to be used in login post request
  const { handleChange, formdata, errors, setErrors } = useForm({
    email: '',  password: ''
  })

  //* Handles submitting post request to database to log user in
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
    
      history.push('/feed')
    } catch (err){
      setErrors(err.response.data)
    }
  }
 

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <fieldset>

          <label>Email</label>
          <input type="text" 
            name="email"
            vaule={formdata.email}
            onChange={handleChange}
            placeholder="Email"/>
          {errors.email && <p>{errors.email}</p>}

          <label>Password</label>
          <input type="password" 
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Email"/>
          {errors.password && <p>{errors.password}</p>}
          {errors.detail && <p className="form-error-message">{errors.detail}</p>}
          <input className="button-outline form-sumbit full-length-button" type="submit" value="Login"/>
        </fieldset>
      </form>
    </section>
  
  
  )
}

export default Login
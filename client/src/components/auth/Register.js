import React from 'react'
import useForm from '../../utils/useform'
import { motion } from 'framer-motion'
import ImageUploadField from '../../utils/ImageUpload'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'

function Register(){
  const history = useHistory()

  //*Captures users data from form
  const { handleChange, formdata, errors, setErrors } = useForm({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    bio: '',
    profile_image: ''
  })

  //*Hanldes submitting post request to database to register new user
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err){
      setErrors(err.response.data)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="form-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Username</label>
          <input type="text" 
            name="username"
            value={formdata.username}
            onChange={handleChange}
            placeholder="Username"
          />
          {errors.username && <p className="form-error-message">{errors.username}</p>}

          <label>Email</label>
          <input type="text" 
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Email"/>
          {errors.email && <p className="form-error-message">{errors.email}</p>}


          <label>Password</label>
          <input type="password" 
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Password"/>
          {errors.password && <p className="form-error-message">{errors.password}</p>}


          <label>Password Confirmation</label>
          <input type="password"
            name="password_confirmation"
            value={formdata.password_confirmation}
            onChange={handleChange}
            placeholder="Password Confirmation"/>
          {errors.passwordConfirmation && <p className="form-error-message">{errors.passwordConfirmation}</p>}


          <label>Bio</label>
          <textarea
            name="bio"
            value={formdata.bio}
            onChange={handleChange}
            placeholder="Tell why you love gardening"/>
          {errors.bio && <p className="form-error-message"> {errors.bio}</p>} 

          <ImageUploadField
            name="profile_image"
            value={formdata.profile_image}
            labelText="Profile Image"
            onChange={handleChange}
          />
          {errors.profile_image && <p className="form-error-message">{errors.profileImage}</p>}


        </fieldset>
        <button className="button-green button-outline form-sumbit full-length-button" type="submit">Register</button>
      </form>
    </motion.section>
  
  )
}

export default Register
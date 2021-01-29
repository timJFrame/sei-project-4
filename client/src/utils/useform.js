import React from 'react'

//*Function captures data entered by users in forms into state and catchs any errors on the data that has been entered

function useForm(intialstate){
  const [formdata, setFormdata] = React.useState(intialstate)
  const [errors, setErrors] = React.useState(intialstate)

  const handleChange = (e) => {
    const nextState = { ...formdata, [e.target.name]: e.target.value }
    const nextErrorState = { ...errors, [e.target.name]: '' }

    setFormdata(nextState)
    setErrors(nextErrorState)
  }
  return {
    formdata,
    errors,
    handleChange,
    setFormdata,
    setErrors
  }
}

export default useForm


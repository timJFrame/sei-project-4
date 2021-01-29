import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

//*Component that handles uploading an image from Cloudinary wesbite and recives a url back of the uploaded image and the url is captured into state to be used in post requests to the data base

function ImageUploadField({ onChange, value, name, labelText }){

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)

    onChange({ target: { name, value: res.data.url } })
  }

  return (
    <>
      {value ? 
        <div className="profile-preview-image-container">
          <img src={value} alt="selected" className="preview-image"/>
        </div>
        :
        <>
          <label>{labelText || 'Upload Image'}</label>
          <input
            type="file"
            onChange={handleUpload}
            name={name}
          />
        </>
      }
    </>
  )
}

export default ImageUploadField
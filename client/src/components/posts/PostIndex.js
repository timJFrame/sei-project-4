import React from 'react'
import Loader from 'react-loader-spinner'
import { motion } from 'framer-motion'

import { getAllPosts, postUserPost } from '../../lib/api'
import PostCard from './PostCard'
import useForm from '../../utils/useform'
import ImageUploadField from '../../utils/ImageUpload'


function PostIndex(){

  const [posts, setPosts] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPosts()
        setPosts(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

 
  const { formdata, setFormdata, handleChange } = useForm({
    postText: '',
    postImage: ''
  })

  const handlePostSubmit = async (e) =>{
    e.preventDefault()
    try {
      await postUserPost(formdata)
      setFormdata({ postText: '', postImage: '' })
      const { data } = await getAllPosts()
      setPosts(data)
    } catch (err){
      console.log(err)
    }
  }


 

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      className="page-feed-container">
      <form className="user-post-form" onSubmit={handlePostSubmit}>
        <fieldset>
          <textarea 
            name="postText"
            value={formdata.postText}
            onChange={handleChange}
            placeholder="Write your post here...." 
            className="create-post-text-area"/>

          <div className="image-selector">
            <ImageUploadField
              name="postImage"
              value={formdata.postImage}
              onChange={handleChange}
              labelText="Post Image"
            />
          </div>
        </fieldset>

        
        <button className="button-green button clear button-outline form-sumbit " type="submit">Create Post</button>
      </form>
      {posts ?
        posts.map(post => (
          <PostCard key={post.id} {...post}
            getAllPosts={getAllPosts}
            setPosts={setPosts}
          />
        ))
        :
        <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>

      }
    
    </motion.section>
  )
}

export default PostIndex
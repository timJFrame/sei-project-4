import React from 'react'

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
    <section 
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

        
        <input className="button-outline form-sumbit " type="submit" value="Create Post"/>
      </form>
      {posts ?
        posts.map(post => (
          <PostCard 
            getAllPosts={getAllPosts}
            setPosts={setPosts}
            key={post.id} {...post}/>
        ))
        :
        <h2>Loading</h2>

      }
    
    </section>
  )
}

export default PostIndex
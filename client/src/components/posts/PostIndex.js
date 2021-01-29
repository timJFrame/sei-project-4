import React from 'react'

import { getAllPosts } from '../../lib/api'
import PostCard from './PostCard'


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

 




  return (
    <section 
      className="page-feed-container">
      <form className="user-post-form">
        <fieldset>
          <textarea placeholder="Write your post here...." className="create-post-text-area"/>
          <div className="image-selector">
            <label>Select a Photo</label>
            <input type="file"/>
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
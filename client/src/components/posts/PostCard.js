import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ owner, createdAt, postText, postImage, comments, likedBy }){

  const reorderDate = (date) => {
    const dateArray = date.slice(0, 10).split('-')
    const time = date.slice(11, 16)
    return `${time}, ${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
  }


  return (
    <article className="user-post-container">
      
      <Link to="/profile">
        <div className="user-post-details">
          <img src={owner.profileImage} alt={owner.username} className="user-post-image"/>
          <div className="user-post-date-name">
            <h5 className="user-post-name">{owner.username}</h5>
            <p>{reorderDate(createdAt)}</p>
          </div>
        </div>
      </Link>
      <div className="user-post-text">
        <p>{postText}</p>
      </div>

      <div className="user-post-image-container">
        <img src={postImage} alt="Post Image" className="user-post-blog-image"/>
      </div>
   
      
      <div className="comments-likes-display-conatiner">
        <div className="comments-feed-container">
          {comments ?
            comments.map(comment => (
              <>
            
                <div className="user-comment-text">
                  <p><strong>{comment.owner.username}</strong></p>
                  <p>{comment.text}</p>
                </div>

              </>
            ))
            :
            <p>Be the first to comment!!</p>
          }
        </div>
        {likedBy ?

          <div className="likes-feed-view-container">
            <p className="view-like">{`${likedBy.length} likes`}</p>
          </div>
          :
          <p></p>
        }
      </div>
    

   
      <form className="comment-form">
        <fieldset>
          <input type="text" placeholder="Write a comment" className="comment-input"/>
        </fieldset>
        <input className="button-outline form-sumbit button-small" type="submit" value="send"/>
      </form>

    </article>


        
  )
}

export default PostCard
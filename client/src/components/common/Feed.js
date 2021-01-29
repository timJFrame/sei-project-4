import React from 'react'
import { Link } from 'react-router-dom'

function Feed(){
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
      <article className="user-post-container">
      
        <Link to="/profile">
          <div className="user-post-details">
            <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/49535901_10156184605368865_8827419087735881728_n.jpg?_nc_cat=105&ccb=2&_nc_sid=84a396&_nc_ohc=2S4Gz0T63bYAX_nlfzE&_nc_ht=scontent-lhr8-2.xx&oh=9c72529ee8cae39f517cda00df991fc2&oe=6032ED10" alt="claire" className="user-post-image"/>
            <div className="user-post-date-name">
              <h5 className="user-post-name"><strong>Claire</strong></h5>
              <p>Date and Time</p>
            </div>
          </div>
        </Link>
        <div className="user-post-text">
          <p>Had a great time in the Garden today. It looks like its going to be a big harvest this year. The carrots and lettuce look awesome. The potatoes look like there nearly ready to dig up. Could be happier!!!!</p>
        </div>
     

        <div className="comments-display-conatiner">
          <div className="user-comment-text">
            <p><strong>User</strong></p>
            <p>This is a new comment</p>
          </div>
          <div className="user-comment-text">
            <p><strong>User</strong></p>
            <p>This is a another new comment</p>
          </div>
        </div>


     
        <form className="comment-form">
          <fieldset>
            <input type="text" placeholder="Write a comment" className="comment-input"/>
          </fieldset>
          <input className="button-outline form-sumbit button-small" type="submit" value="send"/>
        </form>

      </article>

      <article className="user-post-container">
        <div className="user-post-details">
          <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/49535901_10156184605368865_8827419087735881728_n.jpg?_nc_cat=105&ccb=2&_nc_sid=84a396&_nc_ohc=2S4Gz0T63bYAX_nlfzE&_nc_ht=scontent-lhr8-2.xx&oh=9c72529ee8cae39f517cda00df991fc2&oe=6032ED10" alt="claire" className="user-post-image"/>
          <div className="user-post-date-name">
            <h5 className="user-post-name"><strong>Claire</strong></h5>
            <p>Date and Time</p>
          </div>
        </div>
        <div className="user-post-text">
          <p>Had a great time in the Garden today. It looks like its going to be a big harvest this year. The carrots and lettuce look awesome. The potatoes look like there nearly ready to dig up. Could be happier!!!!</p>
        </div>
        <div className="user-post-image-container">
          <img src="https://i1.wp.com/savvygardening.com/wp-content/uploads/2016/02/vegetable-garden.jpg?resize=657%2C360&ssl=1" alt="user-image" className="user-post-blog-image"/>
        </div>

        <div className="comments-display-conatiner">
          <div className="user-comment-text">
            <p><strong>User</strong></p>
            <p>This is a new comment</p>
          </div>
          <div className="user-comment-text">
            <p><strong>User</strong></p>
            <p>This is a another new comment</p>
          </div>
        </div>


     
        <form className="comment-form">
          <fieldset>
            <input type="text" placeholder="Write a comment" className="comment-input"/>
          </fieldset>
          <input className="button-outline form-sumbit button-small" type="submit" value="send"/>
        </form>
      
      </article>
    
    </section>
  )
}

export default Feed
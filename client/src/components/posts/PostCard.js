import React from 'react'
import { Link } from 'react-router-dom'
import { postComment, postLike, getSinglePost, editSinglePost, deleteComment, deleteSinglePost } from '../../lib/api'
import  useForm  from '../../utils/useform'
import ImageUploadField from '../../utils/ImageUpload'
import { isOwner } from '../../lib/auth'

function PostCard({ id, owner, createdAt, postText, postImage, comments, likedBy, getAllPosts, setPosts }){

  const isPostOwner = isOwner(owner.id)
  let commentOwner
 

  const [edit, setEdit] = React.useState(false)
  const [editImage, setEditImage] = React.useState(false)

  //* Reformats the date from post request
  const reorderDate = (date) => {
    const dateArray = date.slice(0, 10).split('-')
    const time = date.slice(11, 16)
    return `${time}, ${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
  }

 

  const [ commentData, setCommentData ] = React.useState({
    text: '',
    post: `${id}`
  })

  const handleCommentChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value })
  }


  //*Handles submitting a comment vis post request
  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    try {
      await postComment(commentData)
      setCommentData({ text: '' })
      const { data } =  await getAllPosts()
      setPosts(data)
    } catch (err){
      console.log(err)
    }
  }


  //*Handles liking a post
  const handleLike = async (id) => {
    try {
      console.log(id)
      await postLike(id)
      const { data } = await getAllPosts()
      setPosts(data)
    } catch (err){
      console.log(err)
    }
  }

  //*Variable to store the id of the post that is clicked on
  let editPostId 

  const handleEditLoad = () => {
    setEdit(true)
    setEditImage(true)
    editPostId = id
    const getData = async () => {
      const { data } = await getSinglePost(editPostId)
      setFormdata(data)
    }
    getData()
  }

  //* Captures from data when a comment is edited
  const { formdata, handleChange, setFormdata } = useForm({
    postText: '',
    postImage: ''
  })

  
  //* Handles submitting the put request when a comment is edited
  const handleCommentUpate = async (e) => {
    e.preventDefault()
    try {
      await editSinglePost(id, formdata)
      const { data } = await getAllPosts()
      setPosts(data)
      setEdit(false)
      setEditImage(false)
    } catch (err){
      console.log(err.response.data)
    }
  }

  //*Handles deleting comment
  const handleCommentDelete = async (commentId) => {
    const id = commentId
    try {
      await deleteComment(id)
      const { data } = await getAllPosts()
      setPosts(data)
    } catch (err){
      console.log(err)
    }

  }

  //*Hanldes deleting a post
  const handlePostDelete = async () => {
    try {
      const postId = id
      await deleteSinglePost(postId)
      const { data } = await getAllPosts()
      setPosts(data)
    } catch (err){
      console.log(err)
    }
  }

  return (
    <article className="user-post-container">
      
   
      <div className="user-post-details-and-edit-button-container">
       
        <div className="user-post-details">
          <Link to={`/user/${owner.id}`}>
            <img src={owner.profileImage} alt={owner.username} className="user-post-image"/>
          </Link>
          <div className="user-post-date-name">
            <h5 className="user-post-name">{owner.username}</h5>
            <p>{reorderDate(createdAt)}</p>
          </div>
        </div>
       

        {isPostOwner &&
       <>
         {!edit &&
         <>
           <div className="modify-post-button-container">
             <button className="button-green button-outline modify-button button-small" onClick={handleEditLoad}>Edit</button>
           </div>
           <div className="modify-post-button-container">
             <button className="button-red button-outline modify-button button-small" onClick={handlePostDelete}>Delete</button>
           </div>
         </>
         }
       </>
        }
      </div>
    
    
      {!edit ?
        <>
          <div className="user-post-text">
            <p>{postText}</p>
          </div>

          <div className="user-post-image-container">
            <img src={postImage} alt="Post Image" className="user-post-blog-image"/>
          </div>
        </>
        :
        <form className="edit-post-form" onSubmit={handleCommentUpate}>
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
                editImage={editImage}
              />
            </div>
          </fieldset>
          <input className="button-outline form-sumbit " type="submit" value="Save Change"/>
        </form>
      }
      
      <div className="comments-likes-display-conatiner">
        <div className="comments-feed-container">
          {comments ?
            comments.map(comment => (
              <>
                {commentOwner = isOwner(comment.owner.id)}
                <div key={comment.createdAt} className="comment-text-and-button-container">
                  <div  className="user-comment-text">
                    <p><strong>{comment.owner.username}</strong></p>
                    <p>{comment.text}</p>
                  </div>

                  {commentOwner &&
                    <div className="comment-delete-container">
                      <button className="button-red button-outline button-small" onClick={() => handleCommentDelete(comment.id)}>x</button>
                    </div>
                  }
                </div>


              </>
            ))
            :
            <p>Be the first to comment!!</p>
          }
        </div>
        {likedBy ?

          <div className="likes-feed-view-container">
            <button className="button-green button-outline button-small view-like-button" onClick={() => handleLike(id)}>Like</button>
            <p className="view-like">{`${likedBy.length} likes`}</p>

          </div>
          :
          <p></p>
        }
      </div>
    

   
      <form className="comment-form" onSubmit={handleCommentSubmit}> 
        <fieldset>
          <input 
            type="text" 
            placeholder="Write a comment" 
            className="comment-input"
            name="text"
            value={commentData.text}
            onChange={handleCommentChange}
          />
        </fieldset>
        <button className="button-green button-outline form-sumbit " type="submit" >Send</button>
      </form>

    </article>


        
  )
}

export default PostCard
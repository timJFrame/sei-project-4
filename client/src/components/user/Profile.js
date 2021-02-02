import React from 'react'
import { getCurrentUser, deleteSingleUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {  logout } from '../../lib/auth'


function Profile(){
  const [currentUser, setCurrentUser] = React.useState(null)
  const history = useHistory(
  
  )

  //*Gets current users details via get request
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCurrentUser()
        setCurrentUser(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  

  //* Reformats the date from post request
  const reorderDate = (date) => {
    const dateArray = date.slice(0, 10).split('-')
    return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
  }

  //*Handle deleting the current users profile
  const handleProfileDelete = async () => {
    const id = currentUser.id
    await deleteSingleUser(id)
    logout()
    history.push('/')
  }

  return (
    <section className = 'profile-container'>
      {currentUser ?
      
        <>
          <article className="main-user-details">
            <div className="name-email-div">
              <h3 className="username">{currentUser.username}</h3>
              <h5 className="email">{currentUser.email}</h5>
              <p className="email">{`Joined: ${reorderDate(currentUser.dateJoined)}`}</p>
            </div>
            <div className="user-profile-image-view">
              <img src={currentUser.profileImage} alt="" className="user-profile-image"/>
            </div>
          </article>
          <article className="user-bio-container">
            <p className="user-biot-text">
              {currentUser.bio}
            </p>
          </article>
          
          <article className="profile-view-reuse-conatiner">
            <div className="reuse-container-title">
              <h3>Friends</h3>
            </div>
            <div className="friends-container">
              {currentUser.friendedBy ?
                currentUser.friendedBy.map(friend => (
                 
                  <div key={friend.id} className="friend-image-and-name">
                    <div className="friend-image">
                      <img src={friend.profileImage} alt={friend.name} className="reuse-image"/>
                    </div>
                    <div className="friend-name-container">
                      <p>{friend.username}</p>
                    </div>
                  </div> 
                   
                )) 
                :
                <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>
              }



             

            </div>
          </article>

          <article className="profile-view-reuse-conatiner">
            <div className="reuse-container-title">
              <h3>Posts you created</h3>
            </div>
            <div className="reuse-container">
              <div  className="image-and-text" >
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Post Image</th>
                      <th>Post Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUser.createdPosts ?
                      currentUser.createdPosts.map(post => (                
                        <tr key={post.id}>
                          <td>{reorderDate(post.createdAt)}</td>
                          <td><img src={post.postImage} alt="post image"/></td>
                          <td>{post.postText}</td>
                        </tr>
                      )) 
                      :
                      <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </article>



          <article className="profile-view-reuse-conatiner">
            <div className="reuse-container-title">
              <h3>Posts you liked</h3>
            </div>
            <div className="reuse-container">
              <div  className="image-and-text" >
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Post Image</th>
                      <th>Post Text</th>
                      <th>Post Creator</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUser.likedPosts ?
                      currentUser.likedPosts.map(post => (
                 

                        <tr key={post.id}>
                          <td>{reorderDate(post.createdAt)}</td>
                          <td><img src={post.postImage} alt="post image" className="liked-post-image"/></td>
                          <td>{post.postText}</td>
                          <td>{post.owner.username}</td>
                        </tr>
                        
                   
                      )) 
                      :
                      <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>

                    }
                  </tbody>
                </table>
              </div>
            </div>
          </article>



          <article className="profile-view-reuse-conatiner">
            <div className="reuse-container-title">
              <h3>Comments you made</h3>
            </div>
            <div className="comments-made-container">
              <div  className="image-and-text" >
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Comment</th>
                      <th>Post Image</th>
                      <th>Post Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUser.postedComments ?
                      currentUser.postedComments.map(comment => (

                  
                        <tr key={comment.id}>
                          <td>{reorderDate(comment.createdAt)}</td>
                          <td>{comment.text}</td>
                          <td><img src={comment.post.postImage}/></td>
                          <td>{comment.post.postText}</td>
                        </tr>
                   
                      )) 
                      :
                      <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>

                    }
                  </tbody>
                </table>
              </div>
            </div>
          </article>
          <div className="delete-user-container">
            <button className="button-red button-outline" onClick={handleProfileDelete}>Delete Profile</button>
          </div>
        </>
          
        :
        <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>
      }
    </section>
  )
}

export default Profile
import React from 'react'
import { getCurrentUser } from '../../lib/api'
import Loader from 'react-loader-spinner'


function Profile(){

  const [currentUser, setCurrentUser] = React.useState(null)

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
            <div className="reuse-container">
              {currentUser.friendedBy ?
                currentUser.friendedBy.map(friend => (
                  <>
                
                    <div key={friend.id} className="image-and-text" >
                      <div className="friend-profile">
                        <img src={friend.profileImage} alt={friend.username} className="reuse-image"/>
                        <p className="reuse-text">{friend.username}</p>
                      </div>
                    </div>
                 
                
                  </>
                ))
           
                :
                <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>
              }
            </div>
           
          </article>
          <article className="profile-view-reuse-conatiner">
            <div className="reuse-container-title">
              <h3>Created Posts</h3>
            </div>
            <div className="reuse-container">
              {currentUser.createdPosts ?
                currentUser.createdPosts.map(post => (

                  <div key={post.id} className="image-and-text" >
                    <div className="friend-profile">
                      <img src={post.postImage} alt="post image" className="reuse-image"/>
                      
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
              <h3>Posts you have liked</h3>
            </div>
            <div className="reuse-container">
              {currentUser.likedPosts ?
                currentUser.likedPosts.map(post => (

                  <div key={post.id} className="image-and-text" >
                    <div className="friend-profile">
                      <img src={post.postImage} alt="post image" className="reuse-image"/>
                      
                    </div>
                  </div>
                )) 
                :
                <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>

              }
            </div>
          </article>
        </>
          
        :
        <Loader type="ThreeDots" color="#85837f" height={80} width={80} className="loading-spinner"/>
      }
    </section>
  )
}

export default Profile
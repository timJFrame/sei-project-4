import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser, friendUser } from '../../lib/api'
import { motion } from 'framer-motion'
import Loader from 'react-loader-spinner'



function User(){
  const { id } = useParams()

  const [user, setUser] = React.useState(null)
  const [addedFriendMessage, setAddedFriendMessage] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleUser(id)
        setUser(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  //*Remove added friend message
  const removeAddedFriendMessage = () =>  {
    setTimeout(()=> {
      setAddedFriendMessage(false) 
    }, 2000)
  } 


  const handleAddingFriend = async () => {
    try {
      await friendUser(id)
      setAddedFriendMessage(true)
      removeAddedFriendMessage()
    } catch (err){
      console.log(err)
    }
  }


  //* Reformats the date from post request
  const reorderDate = (date) => {
    const dateArray = date.slice(0, 10).split('-')
    return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
  }


  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="profile-container">
      {user ? 
        <>
          <article className="main-user-details">
            <div className="name-email-div">
              <h3 className="username">{user.username}</h3>
              <h5 className="email">{user.email}</h5>
              <p className="email">{`Joined: ${reorderDate(user.dateJoined)}`}</p>
            </div>
            <div className="user-profile-image-view">
              <img src={user.profileImage} alt="" className="user-profile-image"/>
            </div>
          </article>
          <article className="user-bio-container">
            <p className="user-biot-text">
              {user.bio}
            </p>
          </article>

         
          <article className="profile-view-reuse-conatiner">
            <div className="reuse-container-title">
              <h3>Friends</h3>
            </div>
            <div className="friends-container">
              {user.friendedBy ?
                user.friendedBy.map(friend => (
                 
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

          { addedFriendMessage &&
          <div className="added-friend-message-container">
            <p ><strong>{`Great ${user.username} has been added to your friends list`}</strong></p>
          </div>
          }

          <div className="user-profile-friend-button-container">
            <button className="button-green button-outline" onClick={handleAddingFriend}>Add friend</button>
          </div>
        </>
        :
        <p>Loading</p>
      }
    </motion.section>
  )
}

export default User
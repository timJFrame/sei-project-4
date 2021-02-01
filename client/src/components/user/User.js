import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser, friendUser } from '../../lib/api'




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


  console.log(user)

  return (
    <section className="profile-container">
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
          { addedFriendMessage &&
          <div>
            <p>{`Great you added ${user.username} to your friends list`}</p>
          </div>
          }
          <div className="user-profile-freind-button-container">
            <button className="button-outline" onClick={handleAddingFriend}>Add freind</button>
          </div>
        </>
        :
        <p>Loading</p>
      }
    </section>
  )
}

export default User
import React from 'react'
import { getAllUsers } from '../../lib/api'
import { postChat, getCurrentUser } from '../../lib/api'
import { useLocation } from 'react-router-dom'

function Footer(){
  const [users, setUsers ] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  let userId 

  useLocation()

  //*Gets current user
  React.useEffect(() =>{
    const getData = async () => {
      try {
        const { data } = await getAllUsers()
        setUsers(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  //*Handles getting user id
  const handleUserSelection = async (e) => {
    userId = e.target.value
    await postChat({ recipient: userId })

  }

  React.useEffect(() =>{
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

  console.log(currentUser)


  //   //*Handles Submitting Chat to database
  //   const handleChatSubmit = (e) => {
  //     e.preventDefault()
  //     console.log('submited')
  //   }

  return (
    <div className="fixed-footer-container">
      <form > 
        <fieldset>
          <select onChange={handleUserSelection}>
           
            {users ? 
              users.map(user => (
            
                <option 
                  key={user.id} 
                  value={user.id}
                  
                >{user.username}
                </option>
              ))
              :
              <option>Loading...</option>
                
            }
          </select>
        </fieldset>
      </form>
      {currentUser ?
        currentUser.createdChats.map(chat => (
          <div key={chat.id}className="chat-container">
            <h5>{`Chat with: ${chat.recipient.username} `}</h5>
            {chat.communications ?
              chat.communications.map(message => (
                <div key={message.id}>
                  <p>{`${message.sender.username} ${message.text}`} </p>
                  <p></p>
                </div>
              ))
              :
              <p></p>
            }
          </div>
        ))
        :
        <p></p>

      }

      
    </div>
  )
}

export default Footer
import React from 'react'

import { getAllUsers } from '../../lib/api'
import { postChat, getCurrentUser } from '../../lib/api'
import { useLocation } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import CreatedMessage from './CreatedMessage'
import RecievedMessage from './RecievedMessage'



function Footer(){

  const [users, setUsers ] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [chatboard, setChatboard] = React.useState(false)

  
  
  //*Global variables
  let userId 
  const isLoggedIn = isAuthenticated()
  
  
  const { pathname } = useLocation()

  

  //*Gets current user
  React.useEffect(() =>{
    const getData = async () => {
      try {
        const { data } = await getAllUsers()
        const filterUsers = () => data.filter(user =>{
          return user.username !== 'admin' && user.username !== currentUser?.username
        })
        setUsers(filterUsers)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])



  //*Handles getting user id
  const handleUserSelection = async (e) => {
    userId = e.target.value
    if (parseInt(userId) !== currentUser.id){
      await postChat({ recipient: userId })
    }
    const { data } = await getCurrentUser()
    setCurrentUser(data)
  }

 
 
  //*Handles getting the current user who is logged in details
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
  }, [pathname])
  
  
  
 

  
  

  //*Handles showing chat
  const handleShowChat = () => {
    setChatboard(true)
  }

  //*Handles closing chat
  const handleChatClose = () => {
    setChatboard(false)
  }





  return (
    <>
      {isLoggedIn &&
      <div className="fixed-footer-container">

        {!chatboard &&
          <div className="show-chat-button">
            <button className="button-green button-outline button-small" onClick={handleShowChat}>Open Chat</button>
          </div>
        }
    
        {chatboard &&
        
          <>
            <div className="hide-chat-button">
              <button className="button-red button-outline button-small" onClick={handleChatClose}>Close chat</button>
            </div>
            
            <div className="chat-master-container">
              <div className="chat-selection-container">
                <p>Choose someone to chat with</p>
                
                <form >
                  <fieldset>
                    <select onChange={handleUserSelection}>
                      
                      {users ? 
                        users.map(user => (
                          <option 
                            key={user.id} 
                            value={user.id}>
                            {user.username}
                          </option>
                        ))
                        :
                        <option>Loading...</option>
                
                      }
                    </select>
                  </fieldset>
                </form>
              </div>


              {currentUser?.createdChats ?
                currentUser.createdChats.map(chat => (
                  <CreatedMessage key={chat.id}{...chat}
                    getCurrentUser={getCurrentUser}
                    setCurrentUser={setCurrentUser}
                  />
                  
                ))
                :
                <p></p>
              }
              
              {currentUser?.receivedChats ?
                currentUser.receivedChats.map(chat => (
                  <RecievedMessage key={chat.id}{...chat}
                    getCurrentUser={getCurrentUser}
                    setCurrentUser={setCurrentUser}
                  />
                ))
                :
                <p></p>
              } 
            </div>
          </>
        }
      </div>
      }
    </>


  )
}

export default Footer
import React from 'react'
import { getAllUsers } from '../../lib/api'
import { postChat, getCurrentUser, postMessage } from '../../lib/api'
import { useLocation } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

function Footer(){
  const [users, setUsers ] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  
  //*Global variables
  let userId 
  const isLoggedIn = isAuthenticated()
  let messageData
  let chatId
  let recieverId
  const { pathname } = useLocation()

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

  console.log(currentUser)

 
  //*Handles getting for data for message
  const handleMessageChangeDetails =  (chatid, recieverid, e) => {
    messageData = e.target.value
    chatId = chatid
    recieverId = recieverid
    console.log(chatId)
    console.log(recieverId)
  }

  //*
  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    await postMessage({ text: messageData, chat: chatId, receiver: recieverId })
    const { data } = await getCurrentUser()
    setCurrentUser(data)
  }


  return (
    
    

    <div className="fixed-footer-container">
      {isLoggedIn &&
      <>
        <form >
          <fieldset>
            <select onChange={handleUserSelection}>
           
              {users ? 
                users.map(user => (
            
                  <option 
                    key={user.id} 
                    value={user.id}>{user.username}
                  </option>
                ))
                :
                <option>Loading...</option>
                
              }
            </select>
          </fieldset>
        </form>

        {currentUser?.createdChats ?
          currentUser.createdChats.map(chat => (
            <div key={chat.id}className="chat-container">
              <h5>{`Chat with: ${chat.recipient.username} `}</h5>
              {chat.communications ?
                chat.communications.map(message => (
                  <div key={message.id}>
                    <p>{`${message.sender.username} ${message.text}`} </p>
                  </div>
                  
                ))
                :
                <p>No chats yet</p>
              }
             



              <form className="chat-form" onSubmit={handleMessageSubmit}>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Message"
                    onChange={(e)=> handleMessageChangeDetails(chat.id, chat.recipient.id , e)}
                  />
                  
                </fieldset>
                <button className="button-outline">send</button>
              </form>
            </div>
          ))
          :
          <p></p>
        }

        {currentUser?.receivedChats ?
          currentUser.receivedChats.map(chat => (
            <div key={chat.id}className="chat-container">
              <h5>{`Chat with: ${chat.recipient.username} `}</h5>
              {chat.communications ?
                chat.communications.map(message => (
                  <div key={message.id}>
                    <p>{`${message.sender.username} ${message.text}`} </p>
                  </div>
                  
                ))
                :
                <p>No chats yet</p>
              }
             



              <form className="chat-form" onSubmit={handleMessageSubmit}>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Message"
                    onChange={(e)=> handleMessageChangeDetails(chat.communications[0].chat, chat.communications[0].sender.id , e)}
                  />
                  
                </fieldset>
                <button className="button-outline">send</button>
              </form>
            </div>
          ))
          :
          <p></p>
        }

      </>
      }
    </div>
    


  )
}

export default Footer
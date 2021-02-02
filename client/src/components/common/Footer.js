import React from 'react'
import { getAllUsers } from '../../lib/api'
import { postChat, getCurrentUser, postMessage, deleteChat } from '../../lib/api'
import { useLocation } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'


function Footer(){
  const [users, setUsers ] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [chatboard, setChatboard] = React.useState(false)
  
  //*Global variables
  let userId 
  const isLoggedIn = isAuthenticated()
  let chatId
  let recieverId
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


  //*Handles making text field on chat from a controled input
  const [messageData, setMessageData] = React.useState({
    text: '',
    chat: '',
    receiver: ''
  })


  //*Handles getting for data to send in message body
  const handleMessageChangeDetails =  (chatid, recieverid, e) => {
    chatId = chatid
    recieverId = recieverid
    setMessageData({ ...messageData, [e.target.name]: e.target.value, chat: chatId, receiver: recieverId })
  }

  
  //*Handles submitting message post request
  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    await postMessage(messageData)
    setMessageData({ text: '' })
    const { data } = await getCurrentUser()
    setCurrentUser(data)
  }

  //*Handles showing chat
  const handleShowChat = () => {
    setChatboard(true)
  }

  //*Handles closing chat
  const handleChatClose = () => {
    setChatboard(false)
  }

  //*Handles deleting a messahe
  const handleMessageDelete = async (chatid) => {
    await deleteChat(chatid)
    const { data } = await getCurrentUser()
    setCurrentUser(data)
  }




  return (
    <>
      {isLoggedIn &&
      <div className="fixed-footer-container">

        {!chatboard &&
          <div className="show-chat-button">
            <button className="button-outline button-small" onClick={handleShowChat}>Open Chat</button>
          </div>
        }
    
        {chatboard &&
        
          <>
            <div className="hide-chat-button">
              <button className="button-outline button-small" onClick={handleChatClose}>Close chat</button>
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
                  <div key={chat.id}className="chat-container">
                    <h5>{`You're chatting with ${chat.recipient.username} `}</h5>
                    {chat.communications ?
                      chat.communications.map(message => (
                        <div key={message.id}>
                          <p><strong>{`${message.sender.username}: `}</strong> {`${message.text}`} </p>
                        </div>
                  
                      ))
                      :
                      <p>No chats yet</p>
                    }
             
                    <form className="chat-form" onSubmit={handleMessageSubmit}>
                      <fieldset>
                        <input
                          type="text"
                          name="text"
                          value={messageData.text}
                          placeholder="Message"
                          onChange={(e)=> handleMessageChangeDetails(chat.id, chat.recipient.id , e)}
                        />
                  
                      </fieldset>
                      <button className="button-outline" type="submit" value="send">send</button>
                    </form>
                    <button className="button-outline button-small" onClick={() => handleMessageDelete(chat.id)}>Delete</button>
                  </div>
                ))
                :
                <p></p>
              }

              {currentUser?.receivedChats ?
                currentUser.receivedChats.map(chat => (
                  <div key={chat.id}className="chat-container">
                    <h5>{`You're chatting with ${chat.owner.username} `}</h5>
                    {chat.communications ?
                      chat.communications.map(message => (
                        <div key={message.id}>
                          <p><strong>{`${message.sender.username}: `}</strong> {`${message.text}`} </p>
                        </div>
                  
                      ))
                      :
                      <p>No chats yet</p>
                    }
             
                    <form className="chat-form" onSubmit={handleMessageSubmit}>
                      <fieldset>
                        <input
                          type="text"
                          name="text"
                          value={messageData.text}
                          placeholder="Message"
                          onChange={(e)=> handleMessageChangeDetails(chat.communications[0].chat, chat.communications[0].sender.id , e)}
                        />
                  
                      </fieldset>
                      <button className="button-outline" type="submit" value="send">send</button>
                    </form>
                  </div>
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
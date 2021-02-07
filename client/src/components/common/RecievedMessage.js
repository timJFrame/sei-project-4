import React from 'react'
import { postMessage } from '../../lib/api' 

function RecievedMessage({ owner, communications, getCurrentUser, setCurrentUser }){
  let chatId
  let recieverId
  
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

  return (
    < div className="chat-container">
      <h5>{`You're chatting with ${owner.username} `}</h5>
      {communications ?
        communications.map(message => (
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
            onChange={(e)=> handleMessageChangeDetails(communications[0].chat, communications[0].sender.id , e)}
          />
      
        </fieldset>
        <button className="button-green button-outline" type="submit" value="send">send</button>
      </form>
    </div>

  )
}

export default RecievedMessage
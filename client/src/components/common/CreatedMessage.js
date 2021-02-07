import React from 'react'
import { useSpring, animated } from 'react-spring'
import { postMessage, deleteChat } from '../../lib/api' 
function CreatedMessage({ id, recipient, communications, getCurrentUser, setCurrentUser }){

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

  //*Handles deleting a message
  const handleMessageDelete = async (chatid) => {
    await deleteChat(chatid)
    const { data } = await getCurrentUser()
    setCurrentUser(data)
  }

  useSpring({ config: { duration: 5000 } })
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div className="chat-container" style={fade}>
      <h5>{`You're chatting with ${recipient.username} `}</h5>
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
            onChange={(e)=> handleMessageChangeDetails(id, recipient.id , e)}
          />
                  
        </fieldset>
        <button className="button-green button-outline" type="submit" value="send">send</button>
      </form>
      <button className="button-red button-outline button-small" onClick={() => handleMessageDelete(id)}>Delete</button>
    </animated.div> 
  )
}

export default CreatedMessage
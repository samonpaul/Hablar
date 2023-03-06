import React from 'react'

const MessageComp = ({ sender, text, username }) => {
  return (
    <div className={`mb-2 ${sender ? 'text-end' : 'text-start'}`}>
        <div className={`message_container py-2 px-3 mx-2 rounded ${sender ? "": "recieved"}`}>
            <p className='username mb-0'>{username}</p>
            <p className='mb-1 text-white text-message'>{text}</p>
        </div>
    </div>
  )
}

export default MessageComp
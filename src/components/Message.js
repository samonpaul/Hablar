import React from 'react'

const Message = ({message, username}) => {

  const authen = username === message.username

  return (
    <div className={`message__container ${authen ? 'right-align' : 'left-align'}`}>
        <div className={`message-text ${authen ? 'message__user': 'message__other'}`}>
          {!authen && <p className='username'>{message.username}</p>}
          <p className='message'>{message.message}</p>
        </div>
    </div>
  )
}

export default Message
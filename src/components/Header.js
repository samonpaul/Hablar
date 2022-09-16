import React from 'react'
import { UserAuth } from './AuthContext'



const Header = () => {

  const { logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className='header'>
        <h3 className='brand'>Hablar - Group Chat</h3>
        <button className='logout-btn' onClick={handleSignOut}>LogOut</button>
    </div>
  )
}

export default Header
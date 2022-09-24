import React from 'react'
import { UserAuth } from './AuthContext'




const Header = () => {

  const { logOut, user } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className='header' style={{  justifyContent: !user ? "center" : "space-between"}}>
        <h3 className='brand'>Hablar - Group Chat</h3>
        {user && <button className='logout-btn' onClick={handleSignOut}><i className="fa-solid fa-right-from-bracket"></i> LogOut</button>}
    </div>
  )
}

export default Header
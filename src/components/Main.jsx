
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import ChatRoom from "./ChatRoom"


const Main = () => {

    const { logout } = useAuth()
    const [error, setError] = useState('')


    const handleLogout = async () => {
        try {
            await logout()
        } catch (e) {
            console.log(e)
            setError('Unable to logout')
        }
    }

    return (
        <div className="px-lg-4">
            {error.length !== 0 && <div className="alert alert-danger mb-3" role="alert">
                {error}
            </div>}

            <div className="container-lg px-3 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="mb-0 text-white mb-2 room-sub-heading">Chat Rooms</h3>
                    <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
                </div>
                <hr className="text-white mb-4" />

                <div className="chatroom_container">
                    <ChatRoom name="ReactDevs" />
                    <ChatRoom name="JavaScriptPeeps" />
                </div>
            </div>
        </div>
    )
}

export default Main
import { useNavigate } from "react-router-dom"


const ChatRoom = ({ name }) => {

    const navigate = useNavigate()

    const handleJoin = () => {
        navigate(`/room/${name}`)
    }

    return( 
        <div className="chatroom py-3 px-4 d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0 text-white">{name}</p>
            <button className="btn btn-dark" onClick={handleJoin}>Join Room</button>
        </div>
    )
}

export default ChatRoom
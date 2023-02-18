

const ChatRoom = ({ name }) => {
    return( 
        <div className="chatroom py-3 px-4 d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0 text-white">{name}</p>
            <button className="btn btn-dark">Join Room</button>
        </div>
    )
}

export default ChatRoom
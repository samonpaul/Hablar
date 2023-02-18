import ChatRoom from "./ChatRoom"


const Main = () => {
    return (
        <div className="px-4">
            <div className="container px-3 py-3">
                <h3 className="mb-0 text-white mb-2">Chat Rooms</h3>
                <hr className="text-white mb-4"/>

                <div className="chatroom_container">
                    <ChatRoom name="Room No 1"/>
                    <ChatRoom name="Room No 2"/>
                </div>
            </div>
        </div>
    )
}

export default Main
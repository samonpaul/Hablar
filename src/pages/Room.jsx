import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import MessageComp from '../components/MessageComp'
import { useAuth } from '../context/AuthContext'
import { db } from '../services/Firebase'

const Room = () => {

    const { id } = useParams()
    const { currentUser } = useAuth()
    const emptyRef = useRef()

    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const messageRef = collection(db, id)

    useEffect(() => {
        setIsLoading(true)
        const queryMessage = query(messageRef, orderBy('timeStamp'))
        const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
            let allMessages = []
            snapshot.forEach(doc => {
                allMessages.push({ data: doc.data(), id: doc.id })
            })
            setMessages(allMessages)
            setIsLoading(false)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        emptyRef?.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }, [messages])


    const handleSend = async (e) => {
        e.preventDefault();
        const dataRef = collection(db, id)
        let valueText = input
        setInput('')
        try {
            await addDoc(dataRef, { text: valueText, name: currentUser.displayName, timeStamp: serverTimestamp()})
        }catch(e){
            console.log(e)
        }

    }

    if(isLoading){
        return <Loader />
    }

    return (
        <div className='room py-md-2 py-lg-2 py-sm-0'>
            <div className='room_container m-auto position-relative'>
                <div className='py-3 px-md-4 px-lg-4 px-2 d-flex border-bottom border-secondary align-items-center room__header'>
                    <Link to='/' className='mb-0 me-2 px-2 py-1 back-icon rounded'><i className="fa-solid fa-arrow-left"></i></Link>
                    <p className='mb-0 text-white fs-5 room-id'>{id}</p>
                </div> 

                <div className="messages-block pt-2" >
                    {messages.length !== 0 && messages.map(m => {
                        return <MessageComp text={m.data.text} sender={currentUser.displayName === m.data.name ? true : false} username={m.data.name} key={m.id}/>
                    })}

                    <div className="py-2" ref={emptyRef}></div>
                </div>

                <form className="input_box py-3 px-3 border-top border-secondary w-100 d-flex align-items-center" onSubmit={handleSend}>
                    <input type="text" className='text-input form-control bg-dark border-secondary text-secondary py-2' placeholder='Enter Message...' value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button type='submit' className='btn send-message mx-3'><i className="fa-solid fa-2x fa-paper-plane"></i></button>
                </form>
            </div>
        </div>

    )
}

export default Room
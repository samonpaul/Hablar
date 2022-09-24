import React, { useState, useEffect, useRef } from 'react'
import Message from './Message'
import { db } from './Firebase'
import { v4 as uuid } from 'uuid'
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { UserAuth } from './AuthContext'


const Input = () => {

    const { user } = UserAuth()
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const newMessage = useRef(null)


    // console.log(loader)

    const sendMessage = (event) => {
        event.preventDefault();
        const dataRef = collection(db, 'messages')
        addDoc(dataRef, { message: input, username: user.displayName, timeStamp: serverTimestamp() })

        setMessages([...messages, { username: user.displayName, message: input }])
        setInput('')
    }

    useEffect(() => {

        const fetchData = async () => {
            const dataRef = collection(db, 'messages')
            const ordered = query(dataRef, orderBy('timeStamp', 'asc'))
            onSnapshot(ordered, (snapshot) =>{
                setMessages(snapshot.docs.map(doc => doc.data()))
            })

        }
        fetchData()

    }, [])

    useEffect(() => {
        newMessage.current?.scrollIntoView({ behavior: "smooth"});
    }, [messages])



    return (
        <div className='input-section' >
            <div className="message-section" >

                    {messages.map(message => {
                        return <Message key={uuid()} username={user.displayName} message={message} />
                    })}


            </div>
            <div className='ref-message' ref={newMessage}></div>

            <form className='input-container'>
                <input type="text" className='input-field' onChange={(e) => setInput(e.target.value)} placeholder='Enter Message...' value={input} />
                <button type='submit' className='sendBtn'
                    onClick={sendMessage} disabled={input.split(/\s+/).filter(ele => ele.length !== 0).length === 0 ? true : false}><i className="fa-sharp fa-solid fa-paper-plane"></i></button>

            </form>

        </div>
    )
}

export default Input



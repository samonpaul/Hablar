import React, { useState, useEffect, useRef } from 'react'
import Message from './Message'
import { db } from './Firebase'
import { v4 as uuid } from 'uuid'
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'





const Input = (props) => {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const newMessage = useRef(null)

    console.log(props.username)

    const sendMessage = (event) => {
        event.preventDefault();
        const dataRef = collection(db, 'messages')
        addDoc(dataRef, { message: input, username: props.username, timeStamp: serverTimestamp() })

        setMessages([...messages, { username: props.username, message: input }])
        setInput('')
        newMessage.current?.scrollIntoView({ behavior: "smooth",  });
    }

    useEffect(() => {

        const fetchData = async () => {
            const dataRef = collection(db, 'messages')
            const ordered = query(dataRef, orderBy('timeStamp', "asc"))
            onSnapshot(ordered, (snapshot) => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })

        }
        fetchData()

        newMessage.current?.scrollIntoView({ behavior: "smooth",  });

    }, [])





    return (
        <div className='input-section'>
            <form className='input-container'>
                <input type="text" className='input-field' onChange={(e) => setInput(e.target.value)} placeholder='Enter Message...' value={input} />
                <button type='submit' className='sendBtn'
                    onClick={sendMessage} disabled={input.split(/\s+/).filter(ele => ele.length !== 0).length === 0 ? true : false}>Send</button>

            </form>

            <div className="message-section">
                    {messages.map(message => {
                        return <Message key={uuid()} username={props.username} message={message} />
                    })}
                    <div  ref={newMessage}></div>

            </div>

        </div>
    )
}

export default Input



// things to fix & add

// --> scroll to the new message on submit
// --> authentication

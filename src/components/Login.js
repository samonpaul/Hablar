import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Loader from '../loader.gif'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [warning, setWarning] = useState('none')
    const [button, setButton] = useState('Submit')

    const navigate = useNavigate()

    const submitBtn = (e) => {
        e.preventDefault();

        if(username.split(/\s+/).filter(ele => ele.length !== 0).length !== 0){
            setWarning('none')
            setButton(<img src={Loader} alt="loader" className='loader'/>)
            setTimeout(() => {
                navigate('/chat')
                setButton('Submit')
                setUsername('')
                props.onSubmit(username)
            }, 1000)
        }else {
            setWarning('block')
        }
    }


  return (
    <div className='login-container'>
        <div className="login-form">
            <h3 className='login-heading'>Login</h3>
            <form>
                <input type="text" placeholder='Enter Your Name' className='login-input' value={username} onChange={(e) => setUsername(e.target.value)}/>

                <p className='warning' style={{display: warning}}>please enter username</p>


                <button type='submit' className='login-btn' onClick={submitBtn}>{button}</button>
                
            </form>


        </div>
    </div>
  )
}

export default Login
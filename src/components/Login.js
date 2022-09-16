import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserAuth } from './AuthContext';

const Login = () => {


    const navigate = useNavigate()

    const { googleSignIn, user} = UserAuth()

    const handleGoogleSignIn = async (e) => {
        e.preventDefault()
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        if (user != null){            
            navigate('/chat')
        }


    }, [user])

  return (
    <div className='login-container'>
        <div className="login-form">
            <h3 className='login-heading'>Login</h3>
            <form>

                <button type='submit' className='login-btn' onClick={handleGoogleSignIn}>Login With Google</button>
                
            </form>


        </div>
    </div>
  )
}

export default Login
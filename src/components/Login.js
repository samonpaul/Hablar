import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserAuth } from './AuthContext';
import GoogleButton from 'react-google-button';

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

  return (
    <div className='login-container'>
        <div className="login-form">
            {/* <h3 className='login-heading'>Login</h3> */}
            <form>

                <button type='submit' className='login-btn' onClick={handleGoogleSignIn}><GoogleButton /></button>
                
            </form>


        </div>
    </div>
  )
}

export default Login
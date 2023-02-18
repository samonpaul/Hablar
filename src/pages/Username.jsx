import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Username = () => {

    const { username, currentUser } = useAuth()
    const usernameRef = useRef()
    const[error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let item = {
            displayName: usernameRef.current.value
        }

        try {   
            await username(currentUser, item)
            navigate('/')
        }catch(e){
            console.log(e)
            setError('Unable to proceed')
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="login__container p-4 rounded bg-light">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-4 mt-2">
                        <h3 className="mb-0">Enter Username</h3>
                    </div>
                    {error.length !== 0 && <div className="alert alert-danger mb-3" role="alert">
                        {error}
                    </div>}
                    <div className="mb-3 w-100">
                        <input type="text" className="form-control" id="username" required ref={usernameRef} />
                    </div>
                    <div className="mb-3 w-100">
                        <button type="submit" className="btn btn-submit w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Username
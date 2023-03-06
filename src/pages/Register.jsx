import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LoaderRing from "../components/LoaderRing"
import { useAuth } from "../context/AuthContext"
import { auth } from "../services/Firebase"


const Register = () => {


  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPassword = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    setError('')

    if(passwordRef.current.value === confirmPassword.current.value){
      
      try {
        await signup(auth, emailRef.current.value, passwordRef.current.value)
        setIsLoading(false)
        navigate('/username')

      }catch(e){
        setError(e.code)
        setIsLoading(false)
      }

    }else {
      setError(`Passwords don't match`)
      setIsLoading(false)
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="login__container p-4 rounded bg-light">
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-4 mt-2">
            <h3 className="mb-0">Register</h3>
          </div>
          {error.length !== 0 && <div className="alert alert-danger mb-3" role="alert">
            {error}
          </div>}
          <div className="mb-3 w-100">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required ref={emailRef}/>
          </div>
          <div className="mb-4 w-100">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required ref={passwordRef}/>
          </div>
          <div className="mb-4 w-100">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm-password" required ref={confirmPassword}/>
          </div>
          <div className="mb-3 w-100">
            <button type="submit" className="btn btn-submit w-100">{isLoading ? <LoaderRing /> : "Register"}</button>
          </div>
          <div className="mb-3 d-flex">
            <p className="mb-0 text-muted me-1 switch-text">Already have an account ?</p>
            <Link to="/login" className="mb-0 pointer text-primary text-decoration-none switch-text">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
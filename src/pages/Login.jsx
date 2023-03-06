import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LoaderRing from "../components/LoaderRing"
import { useAuth } from "../context/AuthContext"
import { auth } from "../services/Firebase"

const Login = () => {

  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isloading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try{
      await login(auth, emailRef.current.value, passwordRef.current.value)
      setIsLoading(false)
      navigate('/')
    }catch(e){
      console.log(e)
      setError(e.code)
      setIsLoading(false)
    } 
    
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="login__container p-4 rounded bg-light">
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-4 mt-2">

            <h3 className="mb-0">Login</h3>
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
          <div className="mb-3 w-100">
            <button type="submit" className="btn btn-submit w-100 py-2">{isloading ? <LoaderRing /> : 'Login' }</button>
          </div>
          <div className="mb-3 d-flex">
            <p className="mb-0 text-muted me-1 switch-text">Don't have an account ?</p>
            <Link to="/register" className="mb-0 pointer text-primary text-decoration-none switch-text">Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
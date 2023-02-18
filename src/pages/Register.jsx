import { Link } from "react-router-dom"


const Register = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="login__container p-4 rounded bg-light">
        <form className="form">
          <div className="mb-4 mt-2">
            <h3 className="mb-0">Register</h3>
          </div>
          {/* {error.length !== 0 && <div className="alert alert-danger mb-3" role="alert">
            {error}
          </div>} */}
          <div className="mb-3 w-100">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-4 w-100">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <div className="mb-4 w-100">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm-password" required />
          </div>
          <div className="mb-3 w-100">
            <button type="submit" className="btn btn-submit w-100">Login</button>
          </div>
          <div className="mb-3 d-flex">
            <p className="mb-0 text-muted me-1">Already have an account ?</p>
            <Link to="/login" className="mb-0 pointer text-primary text-decoration-none">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
    
    const { currentUser } = useAuth()

    return (
        <div className="nav__container px-4">
            <nav className="container d-flex justify-content-between align-items-center px-3 py-3 mb-4">
                <div className="logo-container">
                    <Link to="/" className="mb-0 text-white fs-4 text-decoration-none">Messenger</Link>
                </div>

                <div className="account-container d-flex align-items-center">
                    <p className="mb-0 account text-center me-2"><i className="fa-solid fa-user text-white"></i></p>
                    <p className="mb-0 text-white">{currentUser.displayName ? currentUser.displayName : "Unknown"}</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
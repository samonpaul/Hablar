import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
    
    const { currentUser } = useAuth()


    return (
        <>
    
        <div className="nav__container px-lg-4">
            <nav className="container-lg d-flex justify-content-between align-items-center px-3 py-3 mb-4">
                <div className="logo-container">
                    <Link to="/" className="mb-0 text-white fs-4 text-decoration-none logo-text">HABLAR</Link>
                </div>

                <div className="account-container d-flex align-items-center">
                    <p className="mb-0 text-white me-2 displayName">{currentUser.displayName ? currentUser.displayName : "Unknown"}</p>
                    <p className="mb-0 account text-center"><i className="fa-solid fa-user text-white"></i></p>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav__container px-4">
            <nav class="container d-flex justify-content-between align-items-center px-3 py-3 mb-4">
                <div className="logo-container">
                    <Link to="/" className="mb-0 text-white fs-4 text-decoration-none">Messenger</Link>
                </div>

                <div className="account-container">
                    <p className="mb-0 account text-center"><i class="fa-solid fa-user text-white"></i></p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
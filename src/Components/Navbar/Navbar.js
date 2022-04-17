
import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
            <div className="container-fluid ">
                <Link className="navbar-brand  " to="/">Tourist guide -4U</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/rechek">Rechek</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to='/login'>Login</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

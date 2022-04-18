
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../../CoustomLink/CustomLink";
import auth from "../../firebase.init";
import "./Navbar.css";



const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
            <div className="container-fluid ">
                <Link className="navbar-brand  text-white " to="/">Tourist guide -4U</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <CustomLink className="nav-link active" aria-current="page" to="/home">Home</CustomLink>
                        <CustomLink className="nav-link" to="/recheak">Rechaek</CustomLink>
                        <CustomLink className="nav-link" to="/blog">Blog</CustomLink>
                        {

                            user ? <button onClick={handleSignout}>Sing-out</button> : <CustomLink className="nav-link" to='/login'>Login</CustomLink>


                        }
                        <CustomLink className="nav-link" to="/about">About</CustomLink>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;

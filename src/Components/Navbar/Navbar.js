import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo"> BringSart</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to="/home">Home</Link>
                <Link to="/Product">Product</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;

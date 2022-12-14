import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.style.css';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="nav">
            <span className="nav-logo pointer" onClick={() => navigate("/")}>Skilled</span>
            <button className="nav-button pointer" onClick={() => navigate("/application")}>Get started</button>
        </nav>
    )
};

export default Navbar;
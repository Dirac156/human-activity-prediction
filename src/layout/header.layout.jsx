import React from "react";
import Navbar from "./navbar.layout";
import './header.style.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <Navbar />
            <div style={{ height: "100%", width: "45vw", marginTop: "11rem" }}>
                <div className="" style={{ height: "100%"}}>
                    <h2 style={{ 
                            padding: "0", fontSize: "4rem", lineHeight: "1", fontWeight: "bold",
                            marginBottom: "2.5rem"
                        }}
                    >
                        Maximize your surveillance skills with Skilled App
                    </h2>
                    <p style={{ 
                        padding: "0", fontSize: "1.8rem", marginBottom: "2.5rem"}}
                    >
                        Our modern surveillance platform across a range of in-demand features will give you the security you need to live the life you want.
                    </p>
                    <button className="header-button pointer" style={{
                            width: "16.6rem", height: "6.3rem", 
                            fontSize: "2rem", borderRadius: "3rem",
                        }}
                        onClick={() => navigate("/application")}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;
import React from "react";
import "./content.style.css";

const Content = ({ title, text, icon }) => {
    return (
        <div className="content card bg-base-100 shadow-xl">
            <div className="content-icon">{icon}</div>
            <div className="card-body">
                <h2 className="card-title content-title">{title}</h2>
                <p className="content-text">{text}</p>
            </div>
        </div>
    )
}

export default Content;
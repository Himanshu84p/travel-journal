import React from "react";
import logo from "../logo.svg"

export default function Navbar() {
    return (
        <div className="navbar">
            <header className="nav-header">
                <img src= {logo} className="nav-logo" alt="logo"/>
                <p className="header-title">my travel.journal</p>

            </header>
        </div>
    )
}
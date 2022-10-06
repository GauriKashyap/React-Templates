import React from 'react'
import image from '../../assets/logo.png'
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={image} alt="logo" />
                <h1>Portfolio Website</h1>
            </div>
            <div className="nav">
                <ul>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact Us</a>
                </ul>
            </div>
        </nav>



    )
}

export default Navbar
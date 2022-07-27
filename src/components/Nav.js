import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import phoThanhLogo from "../assets/images/phoThanhLogo.jpg"
import "../styles/Nav.css"

function Nav() {

    const [showBurgerMenu, setShowBurgerMenu] = React.useState(false);

    function toggleActive() {
        setShowBurgerMenu(prevState => !prevState)
    }

    function goHome() {
        setShowBurgerMenu(false)
    }


    React.useEffect(() => {
        console.log(showBurgerMenu)

    })


    // come back and take off active status from main logo link to stop it from staying big
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className="logo-link"
                onClick={goHome}>
                <div className="nav--logo">
                    <img className="logo--pic" src={phoThanhLogo}></img>
                    <h1>II</h1>
                </div>
            </NavLink>

            <ul className={`nav-menu ${showBurgerMenu ? "active" : ""}`}>
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className="nav-link"
                        onClick={toggleActive}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="menu"
                        className="nav-link"
                        onClick={toggleActive}>Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="about"
                        className="nav-link"
                        onClick={toggleActive}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="contact"
                        className="nav-link"
                        onClick={toggleActive}>Contact</NavLink>
                </li>
            </ul>
            <div onClick={toggleActive}
                className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav >

    )

}

export default Nav
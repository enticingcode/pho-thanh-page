import React from 'react'
import { NavLink } from 'react-router-dom'
import phoThanhLogo from "../assets/images/pho-logo.png"
import "../styles/Nav.css"
import HamburgerMenu from './HamburgerMenu';

function Nav() {

    const [showMenu, setShowMenu] = React.useState(false);

    function toggleActive() {
        if (showMenu === true) {
            animateBurger();
        }
        setShowMenu(false)
    }


    function animateBurger() {
        const button = document.querySelector("#burger")
        button.classList.toggle("opened")
        setShowMenu(prev => !prev)

    }

    React.useEffect(() => {
        console.log(showMenu)
    }, [showMenu])


    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className="logo-link"
                onClick={toggleActive}>
                <div className="nav--logo">
                    <img alt='Pho Thanh Logo' className="logo--pic" src={phoThanhLogo}></img>
                    <h1>II</h1>
                </div>
            </NavLink>

            <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
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

            <HamburgerMenu
                animateBurger={animateBurger} />

        </nav >

    )

}

export default Nav
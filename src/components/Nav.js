import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="menu">Menu</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
        )
    }
}

export default Nav
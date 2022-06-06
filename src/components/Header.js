import React, { Component } from 'react'
import phoLogo from "../images/pho.jpg"

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>PH <img width="50px" src={phoLogo} /> THANH II</h1>
            </header>
        )
    }
}

export default Header
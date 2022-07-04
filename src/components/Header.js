import React, { Component } from 'react'
import phoVideo from "../assets/videos/phovideo.mp4"

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>PHO THANH II</h1>
                <div className="video--container">
                    <video autoPlay muted loop className="headerVideo" src={phoVideo} />
                </div>
            </header>
        )
    }
}



export default Header
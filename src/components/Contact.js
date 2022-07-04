import React from 'react'
import locationImg from "../assets/images/map.png"

const Contact = () => {
    return (
        <div className="contactPage">
            <section className="contact--info">
                <h1>Contact Us!</h1>
                <p>637 E Joyce Blvd, Fayetteville, AR 72703</p>
                <p>Phone: (479) 966-4200</p>
            </section>
            <section className="directions">
                <h2>Come visit us off of Joyce Blvd and Mall Ave</h2>
                <img className="map--image" src={locationImg} />
            </section>
        </div>
    )
}

export default Contact
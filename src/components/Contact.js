import React from 'react'

const Contact = () => {

    const [smallMap, setSmallMap] = React.useState(false);


    function setMapSize() {
        if (window.innerWidth < 900) {
            setSmallMap(true)
        }
        else if (window.innerWidht > 900) {
            setSmallMap(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("resize", setMapSize)
    })

    return (
        <div className="contactPage">
            <div className='contact--container'>
                <section className="contact--info">
                    <h1>Contact Us!</h1>
                    <p>637 E Joyce Blvd, Fayetteville, AR 72703</p>
                    <a href="tel:4799664200">Phone: (479) 966-4200</a>
                </section>
                <section className="directions">
                    <h2>Or Come visit us: </h2>
                    <iframe className="google--maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.7886618606017!2d-94.15141648426068!3d36.123006180093434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96bf5b1e4a24d%3A0xe8cb7355bb60517f!2sPho%20Thanh%20II!5e0!3m2!1sen!2sus!4v1658426912457!5m2!1sen!2sus" style={{ border: 0 }} loading="lazy" ></iframe>
                </section>
            </div>
        </div>
    )
}

export default Contact
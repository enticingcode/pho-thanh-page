import React from 'react'
import '../styles/About.css'
import ImageCarousel from './ImageCarousel'


const About = () => {
    return (
        <>
            <div className="aboutContainer">
                <ImageCarousel />
                <div className="aboutBlurb">
                    <p>Humbly located in Northwest Arkansas, Pho Thanh II serves unique authentic Vietnamese cuisine like no other in the area.</p>
                    <p>We pride ourselves in bringing the taste of Vietnamese food right here to the bussling little city of Fayettville, Arkansas.</p>
                    <p>Make sure to stop by!</p>
                </div>
            </div>

        </>
    )
}

export default About
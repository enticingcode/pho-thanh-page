import React from 'react'
import slide1 from "../assets/images/storeFront.jpg"
import slide2 from "../assets/images/storeInside.jpg"
import slide3 from "../assets/images/aboutpho.jpg"
import '../styles/About.css'


import ImageCarousel from './ImageCarousel'

const About = () => {
    return (
        <>
            <div className="aboutContainer">
                <ImageCarousel />
                <div className="aboutBlurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu non.
                        <p>Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Lacus sed viverra tellus in. Consequat nisl vel pretium lectus. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Faucibus vitae aliquet nec ullamcorper sit amet. </p>

                        <p>egestas quis ipsum suspendisse ultrices. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Aliquet nibh praesent tristique magna. Elit ut aliquam purus sit amet luctus. At in tellus integer feugiat.</p>
                    </p>
                </div>
            </div>

        </>
    )
}

export default About
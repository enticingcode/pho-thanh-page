import React from 'react'
import slide1 from "../assets/images/storeFront.jpg"
import slide2 from "../assets/images/storeInside.jpg"
import slide3 from "../assets/images/aboutpho.jpg"

const About = () => {
    return (
        <>
            <div className="aboutContainer">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slide1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="aboutBlurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu non. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Lacus sed viverra tellus in. Consequat nisl vel pretium lectus. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Faucibus vitae aliquet nec ullamcorper sit amet. Et egestas quis ipsum suspendisse ultrices. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Aliquet nibh praesent tristique magna. Elit ut aliquam purus sit amet luctus. At in tellus integer feugiat.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
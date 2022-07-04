import React from 'react'
import facebookLogo from "../assets/images/facebook.svg"
import yelpLogo from "../assets/images/yelp.png"

const Home = () => {
    return (
        <>
            <div className='home'>
                <h2>Welcome to
                    <h1>PHO THANH II</h1>
                </h2>
                <div className="socials">
                    <form target="_blank"
                        method="GET"
                        action="https://www.facebook.com/pages/Pho-Thanh-II/198371247193448">
                        <button>
                            <img src={facebookLogo}></img>
                        </button>
                    </form>
                    <form target="_blank"
                        method="GET"
                        action="https://www.yelp.com/biz/pho-thanh-ii-fayetteville?osq=pho+thanh+ii">
                        <button>
                            <img src={yelpLogo}></img>
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-image"></div>


        </>
    )
}

export default Home
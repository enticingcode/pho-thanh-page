import React from 'react'
import facebookLogo from "../assets/images/facebook.svg"
import yelpLogo from "../assets/images/yelp.png"
import fetchReviews from './FetchReviews'

const Home = () => {

    async function fetchReviews() {
        let url = "https://api.yelp.com/v3/businesses/pho-thanh-ii-fayetteville/reviews"
        let res = await fetch(url, {
            credentials: "include",
            method: 'GET'
        })

        console.log(res)

    }


    React.useEffect(() => {
        fetchReviews();
    }, [])

    return (
        <>
            <div className='home'>
                <h1>Welcome to
                    <div>
                        <h2>PHO THANH II</h2>
                    </div>
                </h1>

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
                <div className='info-container'>
                    <p>637 E Joyce Blvd, Fayetteville, AR 72703</p>
                    <p>Hours</p>
                    <p>Mon-Sun / 10:30am - 8pm</p>
                </div>
            </div>

            <div className='yelp-review-container'>
            </div>

            <div className="bg-image"></div>

        </>
    )
}

export default Home
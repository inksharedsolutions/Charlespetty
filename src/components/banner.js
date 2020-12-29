import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book1-min.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span id="color-o">
                                                ALMOST A
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span>
                                                SPY
                                            </span>
                                            <span id="color-o">
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    The author introduces you to a myriad of characters-expatriate embassy personnel, royals, spies, and partygoers. From mansions of the oil rich to surprise haram (forbidden) gambling junkets with members of the royal family to being charged in absentia and imprisoned and tortured for espionage, Chuck held on to tell us his story.
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner} alt="book"/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;
import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author-profile.png'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Charles A. Petty</h1>
                                <span>Author & Writer</span>

                                <p>
                                In the late 1960’s, I served as a non-uniformed member of the United States military on the secretive seventh floor of TUSLOG Headquarters Ankara, Turkey. During this turmultuous time in that country’s history, there were numerous events which included a Communist Chinese attempted takeover of the Turkish Government, an earthquake, and the Russian “capture” of an American General, the hijacking of a Russian passenger airliner into Turkish airspace and several events across the border into Beirut, Lebanon and western Syrian .
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain
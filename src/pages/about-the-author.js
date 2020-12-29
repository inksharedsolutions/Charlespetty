import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-profile.png'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Charles A. Petty"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                <span className="ata-span-fx">
                                I’ve never been accused of being brilliant or terribly smart. I was never qualified to boost the oil production of Kuwait or any other country, or to advise Middle Eastern rich Sultans on investments or banking or anything else. However, in one of my life’s strange ironies, I’ve become a man who straddles two worlds, trusted in one where I have no allegiance, and living far away from the other, where I owe and fully pledge my loyalties.
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            In the late 1960’s, I served as a non-uniformed member of the United States military on the secretive seventh floor of TUSLOG Headquarters Ankara, Turkey. During this turmultuous time in that country’s history, there were numerous events which included a Communist Chinese attempted takeover of the Turkish Government, an earthquake, and the Russian “capture” of an American General, the hijacking of a Russian passenger airliner into Turkish airspace and several events across the border into Beirut, Lebanon and western Syrian.
                            </p>

                            <p>
                            One of my duties during that time was keeping track of daily activities of several Dev Ginc Chinese Communist infiltraitors, as well as a small roll in helping free several of his coworkers following their kidnapping.
                            </p>

                            <p>
                            Numerous visits further into other countries of that region built further on my skills and knowledge of that region during another time more than twenty years later.
                            </p>

                            <p>
                            Following a business career in Arizona, the ownership of Grand Canyon State Tours and Convention Services and my marriage to wife Maia, I once again returned to the Middle East.
                            </p>

                            <p>
                            In Kuwait I led two parallel lives, one as the Political Section Head of the Ministry of Information in Kuwait and the other as an agent of an undisclosed service both sides of the Kuwait-Iraq border (READ: ALMOST A SPY by Charles Petty)
                            </p>

                            <p>
                            Following the invasion of Kuwait by Iraqi forces of Saddam Hussein in 1989, my services were even more needed and expanded. My wife Maia was employed by the American State Department at the United States Embassy in Kuwait.
                            </p>

                            <p>
                            During the rebuilding of Kuwait, following “Liberation”, my career emphasis was largely on working as a Project Director for the Al Ayoub Marr Bell Corporation building and running camps for the thousands of personnel needed for Great Britain’s Royal Ordinance mine and bomb removal teams. My secretive cross-border duties continued.
                            </p>

                            <p>
                            My reemployment at Kuwait’s Ministry of Information was resurrected and expanded into writing for cross-border propaganda broadcasting.
                            </p>

                            <p>
                            In late 1992 early 1993 the United Nations decided to develop a multi-national effort to feed the people of Somalia. I was selected to enter Somalia under the Company of Disaster Recovery where I arbitrated between the United Nations Camp and the two War Lord of Somalia Mohammed Farrah Aideed and Ali Mohammed Mahdi and a third man with whom I dealt with daily and whom became literally my best friend, Osman Otto. This man would later become the most terrorizing War Lord of all and would become the one who ordered the attack and killing of 18 American Military members and members of the United Nations Forces in BLACK HAWK DOWN.
                            </p>

                            <p>
                            Almost daily I rotated to arrange financing for each War Lord while conducting off-loading of cargo ships at the Port of Mogadishu and aircraft arriving at the Airport in Mogadishu as well as free passage for aide convoys inland to Baidoa and Baidera and other places of need as far as the border of Kenya.
                            </p>

                            <p>
                            My daily runs around the war-torn Capitol of Mogadishu had me and my “shooters” running back and forth through “Sniper Alley” and often into the heavily guarded “compounds” of both War Lords for my face to face negotiations.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Charles A. Petty
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
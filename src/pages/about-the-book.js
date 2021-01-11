import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book1-min.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'charles-a-petty',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Charles A. Petty"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Almost A Spy Too`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'black-psychologist',
                                    content:
                                    `
                                    <p>
                                    The author introduces you to a myriad of characters-expatriate embassy personnel, royals, spies, and partygoers. From mansions of the oil rich to surprise haram (forbidden) gambling junkets with members of the royal family to being charged in absentia and imprisoned and tortured for espionage, Chuck held on to tell us his story. You will be introduced to this flamboyant host and his hostess and their worldwide travels. They have journeyed through African safaris and exploited the waters of the Nile, have been special guests of the King of Thailand, and held meetings with one of Chuck's counterparts in Moscow. 
                                    </p>

                                    <p>
                                    Cross over to the other side of his cover jobs as he exposes the intrigue of the Jeddah Conference where kings, princes, and ministers begged Kuwait to arbitrate with Saddam Hussein to save their country. Learn how Kuwait's ruling family not only spurned efforts to hold off invasion, but failed to even make preparations to protect their population from impending death and destruction. For many years the Kuwaitis had been stealing Iraqi oil, and Saddam was there for payback. Purse strings and the toss of a coin decided which side the Americans would be on and where the line would be drawn in the sand. 
                                    </p>

                                    <p>
                                    Follow Chuck on Ali Baba runs and night crawling, behind enemy lines and closed doors of ministries, palaces, and mosque offices, while searching for monetary trails destined for terrorist links. During his on and off relationship with Kuwait, Chuck moved his efforts over to the Horn of Africa, to the stifling-hot dusty streets of Mogadishu, Somalia, where the United Nations was trying to set up a legitimate government. With six to seven Marine Corp shooters for constant protection, he conducted business from the seaport and airport via the K-4 sniper alley to the United Nations compound on the grounds of the former American embassy. In Somalia, his daily duties included personal negotiations with the two opposing warlords, Mohammed Farah Aideed and Moha.
                                    </p>
                                    `,
                                    
                                    ebooks:{
                                        stratton: 'https://www.stratton-press.com/books/almost-a-spy/',
                                        barnes: 'https://www.barnesandnoble.com/w/almost-a-spy-charles-petty/1108219997?ean=9781648951206',
                                        amazon :'https://www.amazon.com/Almost-Spy-Charles-Petty-ebook/dp/B08F2Y8CS1/ref=sr_1_1?dchild=1&keywords=9781648951206&qid=1609141701&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'',
                                        barnes:'',
                                        booksamillion:'',
                                    }
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;
import React from 'react'



const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                <div className="column"> 
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>
                            {props.data.title} <br />
                            <span>{props.data.spanTitle}</span>
                        </h1>
                        
                        <div className="content-body"
                            dangerouslySetInnerHTML={{ __html: `${props.data.content}` }} />
                    </section>

                    <section className="fullSection">
                        <nav className="booklinkBlocks">
                            { (props.data.ebooks.amazon.length + props.data.ebooks.stratton.length + props.data.ebooks.barnes.length) > 0 &&(
                                <span>Ebook :</span>
                            )}
                            

                            { props.data.ebooks.amazon.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.amazon}>Amazon</a></li>
                            )}
                            { props.data.ebooks.stratton.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.stratton}>Stratton Press</a></li>
                            )}
                            { props.data.ebooks.barnes.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.barnes}>Barnes & Noble</a></li>
                            )}
                            

                        </nav>

                        <nav className="booklinkBlocks">
                            {/*
                                (props.data.paperback.amazon.length + props.data.paperback.booksamillion.length + props.data.paperback.barnes.length) > 0?
                                <span>Paperback :</span> :
                                <p className="book-links-coming"></p>
                            */}
                            { Object.entries(props.data.paperback).length > 0?
                                <span>Paperback :</span> :
                                <p className="book-links-coming"></p>
                            }

                            { props.data.paperback.amazon.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.amazon}>Amazon</a></li>
                            )}
                            { props.data.paperback.barnes.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.barnes}>Barnes & Noble </a></li>
                            )}
                            { props.data.paperback.booksamillion.length > 0 && (
                                <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.booksamillion}>Books A Million</a></li>
                            )}
                            
                        </nav>
                    </section>
                </div>	
            </div>
        </>
    )
} 

export default BookInfo;

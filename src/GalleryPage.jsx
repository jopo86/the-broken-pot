import { useState } from 'react';

import Piece from './Piece';
import './styles/GalleryPage.css'

import gallery1 from './assets/images/gallery/gallery-1.png';
import gallery2 from './assets/images/gallery/gallery-2.png';
import gallery3 from './assets/images/gallery/gallery-3.png';
import gallery4 from './assets/images/gallery/gallery-4.png';
import gallery5 from './assets/images/gallery/gallery-5.png';
import gallery6 from './assets/images/gallery/gallery-6.png';
import gallery7 from './assets/images/gallery/gallery-7.png';
import gallery8 from './assets/images/gallery/gallery-8.png';
import gallery9 from './assets/images/gallery/gallery-9.png';
import gallery10 from './assets/images/gallery/gallery-10.png';
import gallery11 from './assets/images/gallery/gallery-11.png';
import gallery12 from './assets/images/gallery/gallery-12.png';
import gallery13 from './assets/images/gallery/gallery-13.png';
import gallery14 from './assets/images/gallery/gallery-14.png';
import gallery15 from './assets/images/gallery/gallery-15.png';
import gallery16 from './assets/images/gallery/gallery-16.png';
import gallery17 from './assets/images/gallery/gallery-17.png';
import gallery18 from './assets/images/gallery/gallery-18.png';
import gallery19 from './assets/images/gallery/gallery-19.png';
import gallery20 from './assets/images/gallery/gallery-20.png';
import gallery21 from './assets/images/gallery/gallery-21.png';
import gallery22 from './assets/images/gallery/gallery-22.png';
import gallery23 from './assets/images/gallery/gallery-23.png';

import firings1 from './assets/images/gallery/firings/firings-1.png';
import firings2 from './assets/images/gallery/firings/firings-2.png';
import firings3 from './assets/images/gallery/firings/firings-3.png';
import firings4 from './assets/images/gallery/firings/firings-4.png';
import firings5 from './assets/images/gallery/firings/firings-5.png';
// import firingsVid1 from './assets/images/gallery/firings/firings-vid-1.MOV';
// import firingsVid2 from './assets/images/gallery/firings/firings-vid-2.MOV';

function GalleryPage() {

    const [active, setActive] = useState("normal");

    return (
        <div className="gallery-page">
            <h1>Gallery</h1>
            <div className="gallery-navbar">
                <h3 className="gallery-navbar-normal active" onClick={
                    () => {
                        if (document.querySelector(".gallery-navbar-normal").classList.contains("active")) {
                            return;
                        }

                        document.querySelector(".gallery-navbar-normal").classList.add("active");
                        document.querySelector(".gallery-navbar-firings").classList.remove("active");

                        setActive("normal");
                    }
                }>Normal</h3>
                <h3 className="gallery-navbar-firings" onClick={
                    () => {
                        if (document.querySelector(".gallery-navbar-firings").classList.contains("active")) {
                            return;
                        }

                        document.querySelector(".gallery-navbar-firings").classList.add("active");
                        document.querySelector(".gallery-navbar-normal").classList.remove("active");

                        setActive("firings");
                    }
                }>Firings</h3>
            </div>
            <div className="pieces">
                {
                    // Normal
                    active == "normal" ? (
                        <>
                            <Piece 
                                title="No Title"
                                imgSrc={gallery1} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery2} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery3} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery4} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery5} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery6} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery7} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery8} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery9} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery10} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery11} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery12} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery13} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery14} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery15} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery16} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery17} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery18} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery19} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery20} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery21} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery22} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={gallery23} 
                                caption="No caption" 
                            />
                        </>
                    )
                    : (
                        <>
                            <Piece 
                                title="No Title"
                                imgSrc={firings1} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={firings2} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={firings3} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={firings4} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={firings5} 
                                caption="No caption" 
                            />
                            {/* <Piece 
                                title="No Title"
                                imgSrc={firingsVid1} 
                                caption="No caption" 
                            />
                            <Piece 
                                title="No Title"
                                imgSrc={firingsVid2} 
                                caption="No caption" 
                            /> */}
                        </>
                    )
                }
                
            </div>
        </div>
    )
}

export default GalleryPage;

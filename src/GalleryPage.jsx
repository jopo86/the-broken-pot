import Piece from './Piece';
import './styles/GalleryPage.css'

import img1 from './assets/img1.webp'

function GalleryPage() {
    return (
        <div className="gallery-page">
            <h1>Gallery</h1>
            <div className="pieces">
                <Piece 
                    title="Sample"
                    imgSrc={img1} 
                    caption="This is a sample piece" 
                />
                <Piece 
                    title="Sample"
                    imgSrc={img1} 
                    caption="This is a sample piece" 
                />
                <Piece 
                    title="Sample"
                    imgSrc={img1} 
                    caption="This is a sample piece" 
                />
                <Piece 
                    title="Sample"
                    imgSrc={img1} 
                    caption="This is a sample piece" 
                />
                <Piece 
                    title="Sample"
                    imgSrc={img1} 
                    caption="This is a sample piece" 
                />
            </div>
        </div>
    )
}

export default GalleryPage;

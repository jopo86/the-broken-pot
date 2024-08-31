import Blurb from './Blurb';
import './styles/HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            <h1>Michelle Murray</h1>
            <div className="home-page--app-blurb-container">
                <Blurb heading="About" link="/about"
                    desc="Learn about me and what I do"/>
                <Blurb heading="Gallery" link="/gallery"
                    desc="See my work"/>
            </div>
        </div>
    )
}

export default HomePage;

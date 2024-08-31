import { Link } from 'react-router-dom';

import './styles/Blurb.css'

function Blurb(props) {
    return (
        <div className="blurb-container">
            
                <Link className="react-link" to={props.link}>
                    <h1>{props.heading}</h1>
                    <p>{props.desc}</p>
                </Link>
        </div>
    )
}

export default Blurb;

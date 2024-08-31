import './styles/Piece.css'

function Piece(props) {
    return (
        <div className="piece">
            <h3>{props.title}</h3>
            <img src={props.imgSrc} alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    )
}

export default Piece;

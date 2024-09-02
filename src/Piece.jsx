import './styles/Piece.css'

function Piece(props) {
    return (
        <div className="piece">
            <img src={props.imgSrc} alt={props.caption} />
        </div>
    )
}

export default Piece;

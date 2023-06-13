import { Link } from "react-router-dom"
import "../Criptos/cripts.css"

const Cripst = ({symbol, name, priceUsd, changePercent24Hr, id}) => {
    return(
        <div className="criptos">
            <h3> {name} </h3>
            <div className="info">
                <p><span className="price"> Precio: </span> {priceUsd} </p>
            </div>
            <p><span> Simbolo: {symbol} </span></p>
            <p> Variación 24hrs: {changePercent24Hr} </p>
            <Link to={`/criptonomedas/${id}`} > Ver detalles </Link>
        </div>
    )
}

export default Cripst
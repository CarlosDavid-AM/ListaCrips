const InfoCrip = ({crip}) => {
    return (
            <ul>
                <li><p>Rank: {crip.rank} </p></li>
                <li><p>Simbolo: {crip.symbol} </p></li>
                <li><p>Precio: {crip.priceUsd} </p></li>
            </ul>
        )
}

export default InfoCrip
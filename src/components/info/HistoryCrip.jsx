const HistoryCrip = ({history}) => {
    return(
        history && (
            <table className="historial-table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(({date, priceUsd, time}) => (
                        <tr key={date}>
                            <td>{new Date(time).toDateString()}</td>
                            <td>{priceUsd}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </table>
        )
    )
}

export default HistoryCrip
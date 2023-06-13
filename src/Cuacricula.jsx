import axios from "axios"
import { useEffect, useState } from "react"
import "./css/App.css"
import Cripst from "./components/Criptos/criptos"

function Cuacricula() {

  const [coin, setCoin] = useState()

  const URL_API = import.meta.env.VITE_URL_API

  useEffect(() => {
    axios.get(`${URL_API}assets`)
    .then((dato) => setCoin(dato.data.data))
    .catch(() => console.error("falla la peticion"), [])
  })

  if (!coin) return <span>Cargando...</span>

  return (
      <div className="app-container">
        <h1>Lista de Criptonomedas</h1>
        <div className="monedasCrips">
            {
              coin.map(({symbol, name, priceUsd, id, changePercent24Hr}) => (
                <Cripst key={id} className="cripst" 
                  symbol={symbol} name={name} id={id}
                  changePercent24Hr={parseFloat(changePercent24Hr).toFixed(4)}
                  priceUsd={parseFloat(priceUsd).toFixed(4)} 
                />
              ))
            }
        </div>
      </div>
  )
}

export default Cuacricula
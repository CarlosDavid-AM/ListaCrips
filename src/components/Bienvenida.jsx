import { Link } from "react-router-dom"
import "../css/Bienvenida.css"

const Bienvenida = () => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-heading">¡Bienvenido a ListaCrips!</h1>
            <p className="welcome-description">
                La plataforma que te brinda información actualizada sobre las criptomonedas más populares. 
                Explora nuestra lista y mantente al tanto de las últimas tendencias del mundo de las criptos.
            </p>
            <p className="welcome-cta">¡Comienza tu viaje hacia el éxito financiero con nosotros!</p>
            <Link to="/criptonomedas">Ver las Criptomonedas</Link>
        </div>

    )
}

export default Bienvenida
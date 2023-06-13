import { Link, NavLink } from "react-router-dom"

const Menu = () => {
    return(
        <ul>
            <li> <NavLink to="/">Inicio</NavLink> </li>
            <li><Link to="/criptonomedas">Lista de Criptomonedas</Link></li>
        </ul>
    )
}

export default Menu
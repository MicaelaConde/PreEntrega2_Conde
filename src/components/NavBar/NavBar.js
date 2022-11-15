import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
    <h1> Logo </h1>
    <div>
    <ul>
    <li>Home</li>
    <li>Habitaciones</li>
    <li>Contacto</li>
    </ul>
    </div>
    <div>
    <Link to="/cart">Carrito</Link>
    </div>
    </div>
  )
}

export default NavBar
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../assets/logo/logo.png';
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (

   <div>
   <div  className="NavBar">
   <img className="logo" src={logo} alt="Logo"/>
    <ul className="ul_NavBar">
    <li>
    <NavLink to="/">
    Home
    </NavLink>
    </li>
    <li>
    <NavLink to="/filtrar/Habitaciones">
    Habitaciones
    </NavLink></li>
    <li>
    <NavLink to="/filtrar/Productos">
   Productos
    </NavLink></li>
    </ul>
    <div className="carrito">
   
    <Link to="/cart">
    <CartWidget/>
    </Link>
    
    <div>

    </div>
    </div>
    </div>


    </div>
  )
}

export default NavBar
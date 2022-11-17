import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../images/logo.png';
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
    <NavLink to="/filtrar/Single">
    Single
    </NavLink></li>
    <li>
    <NavLink to="/filtrar/Couple">
    Couple
    </NavLink></li>
    </ul>
    </div>
    <div>
    <Link to="/cart">Carrito</Link>
    </div>
    </div>
  )
}

export default NavBar
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import '../styles/navbar.css'


const NavBar = () => {

    return (

    <nav className="navbar-container">

        <NavLink to={`/articles`}> <img src={logo} id="logo"/></NavLink>

        <button className="nav-buttons"><Link to="/articles">Home</Link></button>

        <button className="nav-buttons"><Link to="/topics">Tea selection</Link></button>
     
    </nav>

  
    )

}

export default NavBar


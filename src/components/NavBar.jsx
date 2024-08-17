

import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'



const NavBar = () => {

    return (

    <nav id="navbar-container">

        <NavLink to={`/articles`}> <img src={logo} id="logo"/></NavLink>

        <button className="nav-buttons"><Link to="/articles">Home</Link></button>

        <button className="nav-buttons"><Link to="/topics">Tea selection</Link></button>
     
    </nav>

  
    )

}

export default NavBar


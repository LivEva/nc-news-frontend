import Topics from "./Topics";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

    <nav id="navbar-container">

        <button className="nav-buttons"><Link to="/articles">Home</Link></button>

        <button className="nav-buttons"><Link to="/topics">Tea selection</Link></button>

     

    </nav>

  
    )

}

export default NavBar;
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar()
{
return(
<div>
<nav>
    <div class="nav-container">
        <div className="logo">
            <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sprout.svg" alt="AgroConnect Logo"/>
            <span>AgroConnect</span>
        </div>
        <div className="nav-links">

            <Link to="/">Home</Link>
           <Link to="/marketplace">Marketplace</Link>
            <Link to="about">About</Link>
            
            
          <Link to="sign-in"><button className="sign-in">Sign In</button></Link>  
</div>
</div>
</nav>













</div>





)
}

export default Navbar
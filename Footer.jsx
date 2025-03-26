import { Link } from "react-router-dom";
import "./Footer.css"


function Footer()
{
    return(

        <div>
<footer>
    <div className="footer-content">
        <div className="footer-section">
            <div className="footer-logo">
                <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sprout.svg" alt="AgroConnect Logo"/>
                <span>AgroConnect</span>
            </div>
            <p>Connecting local agriculture businesses in the digital age.</p>
        </div>
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Services</h3>
            <ul>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Expert Connect</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Training</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
                <li>Email: info@agroconnect.com</li>
                <li>Phone:1234567890</li>
                <li>Address: AgroConnect Farmlands</li>
                <li>Airoli, Maharashtra 421202</li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2025 AgroConnect. All rights reserved.</p>
    </div>
</footer>


        </div>
    )
}

export default Footer
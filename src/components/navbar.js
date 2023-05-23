import { Link } from 'react-router-dom';
import logo from './WhatsApp Image 2023-04-09 at 16.04.39.jpeg'
export default function Navbar() {
    return (

        <div className="navbar">
            <div class="logo">
                <img src={logo} />
            </div>
            <nav>
                <ul class="links">
                    <li class="active"><Link to="/">HOME</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><a href="#">GET INVOLVED</a></li>
                    <li><Link to="/whoarewe">WHO ARE WE</Link></li>
                </ul>
            </nav>
            <Link to="/signin" class="btn">DONATE</Link>

        </div>
    );

}
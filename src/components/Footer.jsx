import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footeer() {
  /*   const FaEnvelope = ({ size }) => <FaEnvelope style={{ fontSize: size }} />;
   */ return (
    <div className="footer">
      <div class="row">
        <div class="column">
          {<img src={"/assets/logotrans.png"} />}
          <p>Giving hope and shelter to abandoned animals</p>
          <p> Help Us Save Man’s Best Friends </p>
        </div>
        <div class="column">
          <h3>Services</h3>
          <ul class="links">
            <li class="active">
              <Link to="/services">vaccination</Link>
            </li>
            <li>
              <Link to="/services">Sterilisation</Link>
            </li>
            <li>
              <Link to="/services">medical care</Link>
            </li>
            <li>
              <Link to="/services">rescues</Link>
            </li>
          </ul>
        </div>

        <div class="column">
          <h3>who are we </h3>
          <ul class="links">
            <li class="active">
              <Link to="/whoarewe">about</Link>
            </li>
            <li>
              <Link to="/whoarewe">blog</Link>
            </li>
            <li>
              <a href="/contact">contant</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h3>get involved</h3>
          <ul class="links">
            <li class="active">
              <Link to="/">donation</Link>
            </li>
            <li>
              <Link to="/services">adoption</Link>
            </li>
            <li>
              <a href="#">volunteer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <FaInstagram />
        <FaEnvelope />
        <FaFacebook />
      </div>
    </div>
  );
}

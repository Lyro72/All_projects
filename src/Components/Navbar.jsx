import * as React from 'react';
import './../Styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

  //Salida
  return (
    <>
      <div id="Navbar">
        <ul id="menu">
          <li className="el"><Link to="service"><button >Servicio</button></Link><span className="l"></span></li>
          <li className="el"><Link to="about"><button >Acerca de</button></Link><span className="l"></span></li>
          <li className="el"><Link to="contact"><button >Contacto</button></Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

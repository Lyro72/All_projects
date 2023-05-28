import * as React from 'react';
import './../Styles/Footer.css';

const Footer = () => {

  //salida
  return (
    <>
      <div id="Footer">
        <div id="marco">
          <p id="direccion" >C/Sanchez Vieja KM22, San Gregorio de Nigua, San Cristóbal, Rep. Dom.</p>
          <div id="num" >
            <p>+1 849 - 406 - 7504</p>
            <p>+1 829 - 365 - 4968</p>
          </div>
          <p className="correo"><strong>CEO: Ramón Mejía</strong>                        ramathechnology05@gmail.com</p>
          </div>
      </div>
    </>
  );
}

export default Footer;

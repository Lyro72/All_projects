import * as React from 'react';
import './../Styles/Body3.css';

const Body3 = () => {

  //Salida
  return (
    <>
    <div className="bod3">
        <form action="/">
          <h1 id="h1">Contactenos</h1>
          <div className="info">
            <input className="fname" type="text" name="name" placeholder="Nombre completo"/>
            <input type="text" name="name" placeholder="Gmail"/>
            <input type="text" name="name" placeholder="Numero de telefono"/>
          </div>
          <p id="mensaje">Mensaje</p>
          <div>
            <textarea rows="4"></textarea>
          </div>
          <button className="btnform" type="submit" href="/">Enviar</button>
        </form>
    </div>
    </>
  );
}

export default Body3;

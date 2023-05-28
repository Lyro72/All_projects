import * as React from 'react';
import './../Styles/Body2.css';

const Body2 = () => {

  //Salida
  return (
    <>
      <div id="Bod2">

        <div id="flex-layout">

          <div id="historia" className="cubo">
            <h3>Nosotros</h3>
            Somos una pequeña compañia que empezó sus operaciones con trabajos a clientes fijos de intalaciones de camaras en 2016. Luego de los dos primeros años pudimos establecernos con un local, una oficina y servicios mas variados como la venta y reparaciones de equipos electrónicos.
            <br/>
            <br/>
            Nuestro crecimiento es continuo y lo que hemos mantenido desde nuestro comienzo hasta la actualidad es el cumplir siguiendo de nuestos valores.
          </div>


          <div id="medio">

            <div id="valores" className="cubo mid">
              <img id="valogo" src="https://thumbs.dreamstime.com/b/diamond-logo-template-160121184.jpg"/>
              <h2>Valores</h2>
              <ul>
                <li>Compromiso</li>
                <li>Responsabilidad</li>
                <li>Puntualidad</li>
                <li>Empatia</li>
                <li>Flexibilidad</li>
              </ul>
            </div>

            <div id="mision" className="cubo mid">
              <img id="misilogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJ3j1ybugJEsqvC3PuhGw7Rtnb5sWlRKTQptOXk16LjVpOd2-JOEtB0Kd_tOWq9Nl8fI&usqp=CAU"/>
              <h2>Misión</h2>
              <p>Ofrecer servicios por todo el territorio nacional.</p>
            </div>

            <div id="vision" className="cubo mid">
              <img id="visilogo" src="https://i.fbcd.co/products/resized/resized-750-500/70e2a09cc32281bf81a07e2c954a6daf714ca27e5148d9616f0c9c2377dc59f5.jpg"/>
              <h2>Visión</h2>
              <p>
                Ser una empresa competente en el campo en el que trabajamos.
              </p>
            </div>

          </div>

          <div id="logo" className="cubo down">
            <h2>Rama Technology</h2>
            <h3>Nuestro trabajo es hacer tu vida más segura</h3>
          </div>

        </div>
        
      </div>
    </>
  );
};

export default Body2;

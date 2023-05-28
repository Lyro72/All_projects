import * as React from 'react';
import {useState, useEffect} from 'react';
import './../Styles/Body.css';
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import imagen3 from '../assets/imagen3.png';
import imagen4 from '../assets/imagen4.png';

// Lista de imagenes mostradas en el inicio de la pagina
const listaDeImagenes = [
  imagen1,
  imagen2,
  imagen3,
  imagen4
];

const Body = () => {
  const [indice, setIndice] = useState(0);   //imagen del centro
  const [nindice, setNIndice] = useState(1); //imagen de la derecha
  const [pindice, setPIndice] = useState(3); //imgen de la izquienda

  //mecanismo del carrusel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndice(c => c + 1); 
      setNIndice(c => c + 1);
      setPIndice(c => c + 1);
    }, 1500)
    return () => clearInterval(intervalId);
  }, []);

  //aplicando el mecnismo a la imagen del centro
  if (indice > listaDeImagenes.length-1) {
    setIndice(0);
  }
  //aplicando el mecnismo a la imagen de la derecha
  if (nindice > listaDeImagenes.length-1) {
    setNIndice(0);
  }
  //aplicando el mecnismo a la imagen de la izquierda
  if (pindice > listaDeImagenes.length-1) {
    setPIndice(0);
  }
  
  //Salida
  return (
    <>
      <div id="Body_I">
        <img className="imagenR" id="Le" src={listaDeImagenes[pindice]}  />
        <img className="imagen" src={listaDeImagenes[indice]}  />
        <img className="imagenR" id="Ri" src={listaDeImagenes[nindice]}  />
      </div>
    </>
  );
}

export default Body;




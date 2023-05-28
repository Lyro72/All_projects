import * as React from 'react';
import './../Styles/Header.css';
import {  Link } from "react-router-dom";

const Header = () => {

  //Salida
  return (
    <>
      <div id="Header">
        <Link to="/">
          <img id="logoR"  
            src="https://t3.ftcdn.net/jpg/03/68/95/08/360_F_368950850_aMW6C9P5SV7udFGHWgz97fvgNVsnOvpp.jpg"
          />
        </Link>
      </div>
    </>
  );
}

export default Header;


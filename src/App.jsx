import * as React from 'react';
import Body from './Components/Body.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Body1 from './Components/Body1.jsx';
import Body2 from './Components/Body2.jsx';
import Body3 from './Components/Body3.jsx';
import './Styles/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {

  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/"    element={<Body/>} />
          <Route path="/service" element={<Body1/>} />
          <Route path="/about"   element={<Body2/>} />
          <Route path="/contact" element={<Body3/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

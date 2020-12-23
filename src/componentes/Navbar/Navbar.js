import React, { Component } from "react";
import Portada from '../Navbar/Portada'
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar =()=>{
    return (
<div>
<div className="App">
        <div class="o-container">
          <div class="row o-header o-topnav sticky-top navbar">
            <div class="container o-containerNav">
              <div class="col-sm-4">
                <img
                  class="o-logo"
                  src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png"
                  alt="logo"
                />
                <div className = "o-titlepag">Ditto y Pikachu</div>
              </div>
              <div class="col-sm-6">
                <div class="row o-headerButtons">
                <div className = "o-fontheader">
                <Link to = {"/"}>Inicio</Link>
                </div>
                <div className = "o-fontheader">
                <Link to = {"/"}>Movimientos</Link>
                </div>
                <div className = "o-fontheader">
                <Link to = {"/"}>Efectos</Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
          <div class="o-portada">
            <Portada
              imagenPortada="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            />
          </div>
          </div>
    );

}
export default Navbar; 
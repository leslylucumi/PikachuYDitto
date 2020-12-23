import React from "react";
import {Link} from "react-router-dom";
import "./Pokemon.css";

const Pokemon = (props) => {
  const { namePokemon, imagePokemon } = props;
  return (
      <div className="o-cardpokemonhome">
          <div className = "o-encabezado">
          <div>Datos del pokemon</div>
          </div>
        <div className="o-namepokemon">Name: {namePokemon}</div>
        <div className="o-imagepokemon">
          <img className="o-imghome" src={imagePokemon}/>
        </div>
        <div class="o-button">
          <Link to = {"/details/" + namePokemon}><button className="o-btn">Ver detalles </button></Link>
      </div>
      </div>
  );
};
export default Pokemon;

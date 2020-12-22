import React from "react";
import {Link} from "react-router-dom";

const Pokemon = (props) => {
  const { namePokemon, imagePokemon } = props;
  return (
      <div className="o-cardpokemonhome">
        <div className="o-namepokemon">{namePokemon}</div>
        <div className="o-imagepokemon">
          <img className="o-port" src={imagePokemon}/>
        </div>
        <div class="o-button">
          <button className="o-btn">
          <Link to = {"/details/" + namePokemon}>Ver detalles </Link>
          </button>
      </div>
      </div>
  );
};
export default Pokemon;

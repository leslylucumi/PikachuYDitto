import React, { Component } from "react";
import PokeJson from "../poke-json.json";
import Pokemon from "../Pokemon/Pokemon";
import "./Home.css";


class Home extends Component {
  render() {
      const Pokemones = PokeJson.map((infopokemones) => {
        return (
            <div className = "o-pokecards">
            <div className = "o-pokemonescards">
            <Pokemon imagePokemon={infopokemones.sprites.front_default}
            namePokemon = {infopokemones.name}
            key = {infopokemones.id}/>
          </div>
          </div>
          
          
        );
      });
    return (
        <div className = "o-cardsP">
      <div className = "o-cards">
          {Pokemones}
      </div>
      </div>
    );
  }
}
export default Home;

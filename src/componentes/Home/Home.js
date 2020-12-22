import React, { Component } from "react";
import PokeJson from "../poke-json.json";
import Pokemon from "../Pokemon/Pokemon";

class Home extends Component {
  render() {
      const Pokemones = PokeJson.map((infopokemones) => {
        return (
          <div>
            <Pokemon imagePokemon={infopokemones.sprites.front_default}
            namePokemon = {infopokemones.name}/>
          </div>
        );
      });
    return (
      <div>
          <div>{Pokemones}</div>
      </div>
    );
  }
}
export default Home;

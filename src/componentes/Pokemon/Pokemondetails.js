import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PokeJson from "../poke-json.json";
import PokemonAbilities from "./PokemonAbilities";
import PokemonMoves from "./PokemonMoves";
import PokemonSprites from "./PokemonSprites";

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.pathname.replace("/details/", ""),
    };
  }

  render() {
    const Sprites = PokeJson.map((spritespokemones) => {
      if (spritespokemones.name === this.state.id) {
        return (
          <div>
            <PokemonSprites
              imgfront={spritespokemones.sprites.front_default}
              imgespalda={spritespokemones.sprites.back_default}
            />
          </div>
        );
      }
    });
    const Abilities = PokeJson.map((abilitiespokemones) => {
        if (abilitiespokemones.name === this.state.id) {
          return (
            <div>
              <PokemonAbilities
                nameAbility={abilitiespokemones.abilities.map((abilitiespok) => {
                    return(
                        <div>{abilitiespok.ability.name}</div>
                    )
                })}
                // effectAbilities = {abilitiespokemones.abilities.map((abilitiespok) => {
                //     return(
                //         <div>{abilitiespok.ability.effect_entries.map((effectspok) => {
                //             return(
                //                 <div>{effectspok.effect}
                //                 {effectspok.short_effect}
                //                 </div>
                                
                //             )
                //         })}</div>
                //     )
                // })}
              />
            </div>
          );
        }
      });
      const Moves = PokeJson.map((movespokemones) => {
        if (movespokemones.name === this.state.id) {
          return (
            <div>
              <PokemonMoves
                nameMoves={movespokemones.moves.map((movespok) => {
                    return(
                        <div>{movespok.move.name}</div>
                    )
                })}
                // effectMoves = {movespokemones.moves.map((movespok) => {
                //     return(
                //         <div>{movespok.effect_entries.map((movespok) => {
                //             return(
                //                 <div>{movespok.effect}
                //                 {movespok.short_effect}
                //                 </div>
                                
                //             )
                //         })}</div>
                //     )
                // })}
              />
            </div>
          );
        }
      });
    
    return (
      <div>
        <div>{Sprites}</div>
        <div>{Abilities}</div>
        <div>{Moves}</div>
        <div>
            <button>
                <Link to = {"/"}>volver</Link>
            </button>
        </div>
      </div>
    );
  }
}
export default withRouter(PokemonDetails);

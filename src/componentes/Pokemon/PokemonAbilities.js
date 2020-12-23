import React from "react"
import "./PokemonAbilities.css";


const PokemonAbilities =(props)=>{
    const {nameAbility, effectAbilities} = props;
    return (
        
            <div className = "o-abilities">
            <div>Abilities:</div>
            <div className = "o-nameability">
            {nameAbility}
                </div>
            <div className = "o-effectabilities">
             {effectAbilities} 
            </div>
        </div>
         
    );
}
export default PokemonAbilities; 
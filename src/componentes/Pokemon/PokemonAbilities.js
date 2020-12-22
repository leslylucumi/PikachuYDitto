import React from "react"


const PokemonAbilities =(props)=>{
    const {nameAbility, effectAbilities} = props;
    return (
        
            <div className = "o-abilities">
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
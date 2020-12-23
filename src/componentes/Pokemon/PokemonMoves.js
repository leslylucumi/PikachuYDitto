import React from "react"
import "./PokemonMoves.css";


const PokemonMoves =(props)=>{
    const {nameMoves, effectMoves} = props;
    return (
        
            <div className = "o-moves" >
                <div>Moves:</div>
            <div className = "o-namemoves">
               {nameMoves}
                </div>
            <div className = "o-effectmoves">
            {effectMoves}
            </div>
        </div>
         
    );
}
export default PokemonMoves; 
import React from "react"


const PokemonMoves =(props)=>{
    const {nameMoves, effectMoves} = props;
    return (
        
            <div className = "o-moves">
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
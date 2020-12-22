import React from "react"


const PokemonSprites =(props)=>{
    const {imgfront, imgespalda}  = props;
    return (
        <div className = "o-cardMove">
            <div className = "o-front">
            <img src={imgfront}/>
                </div>  
                <div className = "o-espalda">
            <img src={imgespalda}/>
                </div>
        </div>
    );
}
export default PokemonSprites; 
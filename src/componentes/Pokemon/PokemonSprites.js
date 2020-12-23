import React from "react"
import "./PokemonSprites.css";



const PokemonSprites =(props)=>{
    const {imgfront, imgespalda}  = props;
    return (
        <div className = "o-cardSprites">
            <div>
            <img className = "o-front" src={imgfront}/>
                </div>  
                <div>
            <img className = "o-espalda" src={imgespalda}/>
                </div>
        </div>
    );
}
export default PokemonSprites; 
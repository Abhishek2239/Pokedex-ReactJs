import React from 'react';
import './Pokecard.css';



const pokecard = (props) => {
    return(
        <div className="card">
            <img src={props.imgSrc} alt="notfound"/>
            <h3>{props.name}</h3>
            <p>{props.id}</p>
            <p className="ability">{props.abilities}</p>               
        </div>
        );    
}

export default pokecard

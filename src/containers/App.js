import React from 'react';
import './App.css';
import Pokecards from '../components/Pokecards/Pokecards';




const app = () => {  
  return (
    <div className="App">
      <h1>Welcome to the National Pokedex</h1>
      <Pokecards/>          
    </div>
  );
}

export default app




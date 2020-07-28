import React from 'react';
import './App.css';
import data from './pokeObj';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="container">
      <Pokedex pokemons={data}/>
    </div>
  );
}

export default App;

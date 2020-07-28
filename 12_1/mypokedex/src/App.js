import React from 'react';
import pokemons from './data'
import './App.css';
import Pokedex from './Pokedex';

function App() {
  //linha 10 chama o componente Pokedex, passando pra ele o objeto de pokemons que está em data.
  return (
    <div className="App">
      <Pokedex pokemons={pokemons} /> 
    </div>
  );
}

export default App;

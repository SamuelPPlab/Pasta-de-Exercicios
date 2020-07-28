import React from 'react';
import Pokemons from './Pokemons';

class Pokedex extends React.Component {
  render () {
    const { pokemons } = this.props;
    return <div>
      {pokemons.map((pokemon, index) => <Pokemons key={index} {...pokemon} />)}
    </div>
  }
}

export default Pokedex;
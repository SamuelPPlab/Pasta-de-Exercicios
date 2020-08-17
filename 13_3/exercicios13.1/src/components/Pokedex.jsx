import React from 'react';
import PropTypes from 'prop-types';

import { isPokemonFavoriteByIdType, pokemonType } from '../types';
import Button from './Button';
import Pokemon from './Pokemon';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonIndex: 0, filteredType: 'all' };//configura o index do pokemon sendo exibido atualmente e o filtro atual do app
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });//recebe como parametro o novo filtro e muda o index para 0
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => (
      { pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons }//seleciona o estado do index do pokemon sendo exibido e modula o mesmo para que não seja mostrado um index nulo
    ));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props; // pega a prop pokemons
    const { filteredType } = this.state;// pega o filtro atual

    return pokemons.filter((pokemon) => {// filtra os pokemons de acordo com o filtro atual e retorna todos caso o filtro atual seja all
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];// filtra os tipos de pokemons, e retorna todos eles em um array
  }

  render() {
    const { isPokemonFavoriteById } = this.props;//pega a prop ispokemonfavoritebyid
    const filteredPokemons = this.fetchFilteredPokemons();//pega os pokemons filtrados
    const pokemonTypes = this.fetchPokemonTypes();
    const { pokemonIndex } = this.state;//pega o estado pokemon index
    const pokemon = filteredPokemons[pokemonIndex];//pega o array de pokemons filtrados e seleciona somente o index atual

    return (
      <div className="pokedex">
        <Pokemon
          pokemon={pokemon}// pega o pokemon selecionado do grupo filtrado e com o index atual e passa como prop pro pokemon
          isFavorite={isPokemonFavoriteById[pokemon.id]}//
        />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button"
            >
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  isPokemonFavoriteById: isPokemonFavoriteByIdType.isRequired,
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
};

export default Pokedex;
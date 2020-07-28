import React from 'react'; // importa o react
import Pokemon from './Pokemon'; // importa o componente pokemon
import Button from './Button'; // importa o componente button
import './pokedex.css'; // importa o css para ser usado nesse componente

class Pokedex extends React.Component {
  constructor(props) { // permite criar estados
    super(props); // não sei
    this.state = {pokemonIndex: 0, filteredType: 'all'}; //cria caracteristicas do estado inicial
  }

  filterPokemons(filteredType) {
    this.setState({filteredType, pokemonIndex: 0}); // altera o estado da aplicação
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons, // pokemon index está sendo alterado pra ele mesmo + 1
      // e sobre essa soma, está sendo feito o módulo com a length do filteredPokemons
    }));
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props; // desestrutura props para pegar a prop que foi passada quando o elemento foi chamado
    const {filteredType} = this.state; // desestrutura o estado para pegar os tipos filtrados

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true; //retorna todos os pokemons se o botão all for selecionado
      return pokemon.type === filteredType; //retorna somente os pokemons selecionados no botão de filtro
    });
  }

  fetchPokemonTypes() {
    const {pokemons} = this.props; // desestrutura props para poder pegar a prop que foi passada quando o elemento foi chamado
    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))]; //(...new Set() retira repetições),
    //dentro do reduce, types acumula os cada um dos tipos dentro de type, e os espalha dentro do do array vazio que é 
    //passado dentro do terceiro parâmetro 
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons(); // é a coleção de pokemons filtrados no estado atual
    const pokemonTypes = this.fetchPokemonTypes(); //pega os tipos existentes de pokemons
    const pokemon = filteredPokemons[this.state.pokemonIndex]; //pokemon sendo renderizado atualmente

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon} /> {/*chama o componente pokemon*/}
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button"> {/*chama o componente button passando para ele a função filterPokemons como prop*/}
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button">{/*cria os botões de cada tipo de pokemon, passando pra eles uma chave, e a 
              função filterPokemons como prop com o tipo de pokemon como parâmetro'*/}
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}> {/*chama o elemento button passando para ele a função nextPokemon como 
          prop e com a length do filtered pokemons como parametro, também o desativa caso a length de filteredPokemons seja menor ou igual a 1*/}
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;
import React from 'react';
import css from './Pokemons'

class Pokemon extends React.Component {
  render() {
    return <div className='card'>
      <p>Nome: {this.props.name}</p>
      <p>Tipo: {this.props.type}</p>
      <p>Peso Médio {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
      <img src={this.props.image}/>
    </div>
  }
}

export default Pokemon;
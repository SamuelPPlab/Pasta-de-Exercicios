import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,// cria uma chave isOpen no estado
      clickedItem: this.props.content[0].id, // cria uma chave clicked item no estado
    };
  }

  toggleDropdown() {
    return this.setState(state => {// muda o estado da chave isopen para mostrar ou não a  div com os conteúdos
      return {isOpen: !state.isOpen};
    });
  }

  handleItemClick(id) {
    this.setState({clickedItem: id});// função que recebe o id do item que foi clicado na div que é mostrada
  }

  render() {
    const {children, content} = this.props;

    const {item} = content.find(({id}) => id === this.state.clickedItem);

    return (
      <div className="list-container">
        <span>{children}</span>{/*mostra aqui os filhos da tag <Dropdown /> */}
        <div
          className="dropdown-button"
          onClick={this.toggleDropdown.bind(this)}>{/*chama aqui a função toggleDropdown*/}
          {item}
        </div>
        <div className={this.state.isOpen ? 'dropdown-menu' : 'dropdown-menu-hidden'}>{/*muda a classe da div
        de acordo com o estado da aplicação*/}
          {content.map(({id, item}) => (
            <div key={id} onClick={() => this.handleItemClick(id)}>
              <span>{item}</span>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  children: 'Minha lista',// define uma prop default para o título
};

Dropdown.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number, item: PropTypes.string}),//define uma forma para a prop array
  ).isRequired,
  children: PropTypes.string,//define um tipo de prop para a children.
};

export default Dropdown;

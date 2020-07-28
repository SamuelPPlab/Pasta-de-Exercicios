import React, { Component } from 'react';

class FormErrors extends Component {//cria a classe FormErrors
  render() {
    const { formErrors } = this.props; // desestrutura props para pegar apenas os erros
    return (
      <div>
        {Object.keys(formErrors)/*separa as chaves dos erros*/.filter((fieldName) => (
          formErrors[fieldName].length > 0
        ))/*pega o formErrors e filtra as chaves que tem algum erro dentro*/.map((fieldName, i) => (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p> //mostra dentro de uma tag p os erros atuais.
        ))};
      </div>
    );
  }
}

export default FormErrors;

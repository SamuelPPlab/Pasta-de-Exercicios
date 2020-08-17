import React, { Component } from 'react'; // importa e desestrutura o component do react
import './App.css'; //importa o css do arquivo app.css
import FormErrors from './FormErrors'; // importa o componente formErrors

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
// ^ variavel com os estados que serão usados no botão estados do forms
class App extends Component { // cria a classe app

  constructor (props) {
    super(props);
    this.state = {
      name: '', // cria uma chave name no state
      email: '',// cria uma chave email no state
      cpf: '',// cria uma chave cpf no state
      address: '',// cria uma chave address no state
      city: '',// cria uma chave city no state
      countryState: '',// cria uma chave countryState no state
      addressType: '',// cria uma chave adressType no state
      resume: '',// cria uma chave resume no state
      role: '',// cria uma chave role no state
      roleDescription: '',// cria uma chave roleDescription no state
      hasEntered: false,// cria uma chave hasEntered no state
      formErrors: {email: '', password: ''},// cria uma chave form errors no state
    };
  }

  changeHandler = event => {
    let { name, value } = event.target;
    // ^ desestrutura o name e o value do event.target
    if(name === 'name') value = value.toUpperCase() // transforma a input do name em caixa alta

    if(name === 'address') value = this.validateAddress(value) // valida o endereço

    this.updateState(name, value) // chama a função que atualiza o estado
  }

  onBlurHandler = event => {//valida a input city para ter certeza que ele não começa com um número
    let { name, value } = event.target;//desestrutura event.target para usar apenas o valor, e o nome da input

    if(name === 'city') value = value.match(/^\d/) ? '' : value //se value = string começando com numero, atribui
    //ao value uma string vazia. Se o value já for uma string vazia, ou não começar com números, ele continua sendo ele mesmo

    this.updateState(name, value) //atualiza o estado da input city
  }

  updateState(name, value) { //atualiza o estado - recebe o nome e o valor da input a ser atualizada
    this.setState((state) => ({ // recebe o estado atual
      [name]: value, //atualiza o valor da input sendo atualizada no momento
      formErrors: {
        ...state.formErrors, // espalha o estado anterior e adiciona no form errors qualquer erro novo que tenha aparecido
        [name]: this.validateField(name, value) //guarda no estado os erros que estão aparecendo no momento [name] = nome da input do erro
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '') //retira do endereço qualquer caractere especial
  //(que não seja letra, _ ou número)

  handleSubmit = event => {
    event.preventDefault(); //evita que a pagina seja recarregada
  }

  validateField(fieldName, value) { // valida um campo, recebendo como parametro o nome do campo e o seu valor
    switch(fieldName) {
      case 'email': //seleciona a input tag email
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i) // testa se o email está no formato correto
        return isValid ? '' : ' is invalid';//o match vai retornar null caso o email não esteja no formato desejado, 
        //logo, ele vai retornar 'is invalid'. Se não, ele vai retornar uma string vazia
      default:
        break;
    }
    return '';//vai retornar uma string vazia caso não seja chamado com o email
  }

  render () {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                value={this.state.name}//configura o valor da input como sendo o estado da app
                onChange={this.changeHandler}//quando algo é digitado na input, chama o changeHandler
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={this.state.email}//configura o valor como sendo a chave email do estado do app
                onChange={this.changeHandler}//chama o changeHandler quando algo é digitado na input
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                value={this.state.cpf} //define o valor da input como sendo a chave cpf do estado do app
                onChange={this.changeHandler}//chama o changeHandler quando algo é digitado na tag
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={this.state.address}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={this.state.city}
                onBlur={this.onBlurHandler}//chama o onBlurHandler quando o foco é perdido na tag
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                value={this.state.countryState}
                onChange={this.changeHandler}
              >
                  {states.map((value, key) =>//cria as opções do botão select
                    <option key={key}>{value}</option>
                    )
                  }
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
              <div className="container">
                Resumo do currículo:
                <textarea
                  name="resume"
                  maxLength="1000"
                  required
                  value={this.state.resume}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container">
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={this.state.role}
                  onChange={this.changeHandler}
                  onMouseEnter={() => { //mostra a mensagem abaixo quando o campo é clicado
                    alert('Preencha com cuidado esta informação.');
                  }}
                />
              </div>
              <div className="container">
                Descrição do cargo:
                <textarea
                  name="roleDescription"
                  maxLength="500"
                  value={this.state.roleDescription}
                  onChange={this.changeHandler}
                />
              </div>
            </fieldset>
          </form>
        <div className="container">
          <FormErrors formErrors={this.state.formErrors} />{/*renderiza os erros atuais passando para a
          classe o estado atual dos erros*/}
        </div>
      </div>
    );
  }
}

export default App;
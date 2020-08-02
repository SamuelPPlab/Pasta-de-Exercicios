import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,// cria duas chaves para o estado, uma para mostrar a mensagem do modal, e a outra para 
      isDisableButton: false,// desativar o botão enquanto a mensagem é mostrada
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })// não sei de onde isso saiu
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal, //muda o estado de showModal
        isDisableButton: !state.isDisableButton // ativa ou desativa o botão
      }
    ))
  }

  render() {
    return (
      <div className='main'> 
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal && /*mostra o alert caso ele o estado seja true */
          <Alert
            hideComponent={this.changeShowComponent}
            contentTitle="ahusdhfaiusdhfn"
            content="irineu"
          />}
      </div>
    )
  }
}

export default App;
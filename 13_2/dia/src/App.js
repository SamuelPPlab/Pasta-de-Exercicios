import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);//fazendo um bind para não ser retornado um valor indefinido
  }

  componentDidMount() {
    this.fetchDog();//chama a função fetchdog quando o componente é renderizado
  }

  shouldComponentUpdate(nextProps, nextState) {// primeiro parametro declarado e não usado é para ter acesso ao segundo
    if (nextState.data.message.includes("terrier")) {
      return false;//não atualiza o app caso receba um terrier como resposta da requisição na api
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.data.message.split("/")[4];// retira as barras do resultado.message, e seleciona o quinto item do array
    alert(dogBreed);// cria um alerta com a raça do cachorro
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")//chama a api
      .then(res => res.json())//transforma o resultado da busca em um objeto
      .then(result => this.setState({ data: result }));//guarda o resultado no estado
  }

  render() {// dentro da div de retorno, usa os dados da api para construir a pagina
    if (this.state.data === "") return "loading..."; //se a função fetch dog não jogou nada no estado, a tela retorna um "loading"
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <div>
          <img src={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default App;
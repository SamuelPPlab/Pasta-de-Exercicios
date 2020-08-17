import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Action creator</h1>
      <p>É a função que retorna a acão. Acão é um objeto com uma chave tipo "type:" e uma chave "payload:", que pelo que eu entendi, são as props que você quer passar para um componente.</p>
      <h1>Dispatch</h1>
      <p>Para passar uma ação para a store, é preciso despachar essa ação para a store. Para isso precisamos chamar um "dispatch()" passando como parametro a ação que você quer passar para a store.</p>
      <h1>Reducer</h1>
      <p>Um reducer serve para interpretar uma ação e agir de acordo com o tipo dela.</p>
      <h1>Reducer com Vários cases</h1>
      <p>Um reducer pode interpretar vários tipos de ações. É uma ótima pratica usar o switch.</p>
      <h1>Usando consts para as strings dos tipos de ação</h1>
      <p>Para ter um acesso fácil aos tipos de ação, é bom guardá-las dentro de uma variável para facilitar a leitura do código.</p>
      <h1>Subscribe</h1>
      <p>Serve para cadastrar uma função que será ativada quando uma ação for despachada para a store.</p>
      <h1>Combinando múltiplos reducers:</h1>
      <p>Para combinar vários reducers, é necessário usar a função [combineReducers()] e passar como parâmetro um objeto tendo como valor de cada chave, o nome de cada reducer que você quer combinar.</p>
      <h1>Passando informações pelas Ações:</h1>
      <p>Quando uma ação é enviada para um reducer, é possível adicionar mais entradas a esse objeto e usar essas informações.</p>
      <h1>Contador com Reducer</h1>
      <p>Nas linhas 1 e 2, são declaradas as variáveis que vão conter os tipos de ação do reducer.</p>
      <p>Nas linhas 4 a 13, são declaradas as respostas para cada ação que existe no reducer.</p>
      <p>Linhas 15 e 17 criam um funções que retornam ações.</p>
      <p>Linha 19 cria uma store para a aplicação.</p>
      <h1>Nunca mude o estado de uma aplicação, crie um novo:</h1>
      <p>O motivo exato eu não sei, mas uma ótima prática para gerenciar os estados de um app, é sempre criar um novo em vez de alterar o atual. Para isso, o uso do spread operator é essencial.</p>
      <h1>IMUTABILIDADE</h1>
      <p>O exercicio 11 dá mais um exemplo da IMUTABILIDADE do estado do app e mostra como o spread operator serve para ajudar a mantê-la</p>
      <h1>Forma de manter a IMUTABILIDADE</h1>
      <p>As HOFs também são uma ajuda na hora de manter a imutabilidade de um estado, funções como o filter, find, some, map, etc.</p>
      <h1></h1>
    </div>
  );
}

export default App;

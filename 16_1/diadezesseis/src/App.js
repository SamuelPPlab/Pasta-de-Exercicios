import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Action creator</h1>
      <p>É a função que retorna a acão. Acão é um objeto com uma chave tipo "type:" e uma chave "payload:", que pelo que eu entendi, são as props que você quer passar para um componente.</p>
      <h1>Dispatch</h1>
      <p>Para passar uma ação para a store, é preciso despachar essa ação para a store. Para isso precisamos chamar um "dispatch()" passando como parametro a ação que você quer passar para a store.</p>
    </div>
  );
}

export default App;

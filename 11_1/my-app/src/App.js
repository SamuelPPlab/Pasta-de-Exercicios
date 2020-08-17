import React from 'react';
import logo from './logo.svg';
import './App.css';

const tarefasDaSemana = ['lavar roupas', 'limpar a casa', 'matar o rato', 'agredir idosos']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {task('Aprender React')}
      {tarefasDaSemana.map(tarefa => task(tarefa))}
    </div>
  );
}

export default App;

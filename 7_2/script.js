const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio 1 - adicionar uma função com 3 parametros que adiciona um turno na lesson2

function mod (alvo, chave, valor) {
  alvo[chave] = valor;
}

//Exercicio 2 - listar as chaves de um objeto com funções

function lista (obj) {
  for (i in obj) {
    const keys = Object.keys(obj);
    return(keys);
  }
}

//Exercicio 3 pronto - achar o tamanho de um objeto.

function tamanho (obj) {
  const tamanho = Object.entries(obj);
  return(tamanho.length);
}

//Exercicio 4 pronto - listar os valores de um objeto.

function listaV (obj) {
  for (i in obj) {
    const values = Object.values(obj);
    return(values);
  }
}

//Exercicio 5 pronto - criar um objeto com os tres primeiros objetos

const allLessons = ({}, {lesson1, lesson2, lesson3});

// Exercicio 6 criar uma função que soma o total de alunos das aulas.

function totalAlunos (obj) {
  let soma = 0;
  const aulas = Object.keys(obj);
  for (i in aulas) {
    soma += obj[aulas[i]].numeroEstudantes;
  }
  return (soma);
}

//Exercicio 7 criar uma função que retorna o valor de um certo index

function placeFinder (obj, index) {
  const values = Object.values(obj);
  return(values[index]);
}

//Exercicio 8 criar uma função que retorna a chave em um certo index

function placeFinderK (obj, index) {
  const keys = Object.keys(obj);
  return(keys[index]);
}

//Exercicio 9 criar uma função que procura dados num objeto.

function lupa (obj, key, value) {
  const comparado1 = Object.entries(obj);
  let resultado = false;
  for (i in comparado1) {
    if (comparado1[i][0] === key && comparado1[i][1] === value) resultado = true;
  }
  return (resultado)
}
console.log(lupa(lesson3, 'turnor', 'noite'))
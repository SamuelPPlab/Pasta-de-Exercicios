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

function listaV (obj) {
  for (i in obj) {
    const values = Object.values(obj);
    return(values);
  }
}

console.log(listaV(lesson1))
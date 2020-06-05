function criaMenu() {
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio De Janeiro', 'Rio Grande Do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const dropDown = document.getElementById('estado');
  for (let i = 0; i < estados.length; i += 1) {
    const opcao = document.createElement('option');
    opcao.value = estados[i];
    opcao.innerHTML = estados[i];
    dropDown.appendChild(opcao);
  }
}


window.onload
  criaMenu();
;

function gerarCurriculum()  {
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const endereco = document.getElementById('endereco');
  const cidade = document.getElementById('cidade');
  const estado = document.getElementById('estado');
  const resumo = document.getElementById('resumo');
  const cargo = document.getElementById('cargo');
  const cargoDescrito = document.getElementById('Descrição');
  const divPessoal = document.getElementById('pessoal');
  const divProfissional = document.getElementById('profissional');
  const pessoalInfo = [nome, email, cpf, endereco, cidade, estado];
  const profissionalInfo = [resumo, cargo, cargoDescrito];
  divProfissional.innerText = '';
  divPessoal.innerText = '';
  
  for (let i = 0; i < pessoalInfo.length; i += 1) {
    const pInfo = document.createElement('p');
    let pessoalValue = pessoalInfo[i];
    lineHeader = pessoalValue.id;
    lineHeader = lineHeader.charAt(0).toUpperCase() + lineHeader.slice(1);
    pessoalValue = pessoalValue.value;
    pInfo.innerText = `${lineHeader}: ${pessoalValue}`;
    divPessoal.appendChild(pInfo);
  }
  for (let i = 0; i < profissionalInfo.length; i += 1) {
    const pInfo = document.createElement('p');
    let profissionalValue = profissionalInfo[i];
    lineHeader = profissionalValue.id;
    lineHeader = lineHeader.charAt(0).toUpperCase() + lineHeader.slice(1);
    profissionalValue = profissionalValue.value;
    pInfo.innerText = `${lineHeader}: ${profissionalValue}`;
    divProfissional.appendChild(pInfo);
  }
}

document.getElementById('form').addEventListener('submit', (e) => {
  const erros = [];
  const errorDisplay = document.getElementById('erros');
  const cpf = document.getElementById('cpf');
  if (cpf.value.length > 11 || cpf.value.length < 11) {
    erros.push('Um CPF possui onze números.')
  } 
  if (erros.length > 0) {
    e.preventDefault();
    errorDisplay.innerText = erros;
  } else {
    e.preventDefault();
    gerarCurriculum();
  }
});

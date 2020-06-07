function criaMenu() {

    //Como o nome já diz, aqui o JS cria o menu com o nome de todos os estados do Brasil e os coloca dentro da tag option da tag select;
    
    const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio De Janeiro', 'Rio Grande Do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    const dropDown = document.getElementById('estado');
    for (let i = 0; i < estados.length; i += 1) {
      const opcao = document.createElement('option');
      opcao.value = estados[i];
      opcao.innerHTML = estados[i];
      dropDown.appendChild(opcao);
    }
  }
  
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const endereco = document.getElementById('endereco');
  const cidade = document.getElementById('cidade');
  const estado = document.getElementById('estado');
  const resumo = document.getElementById('resumo');
  const cargo = document.getElementById('cargo');
  const dia = document.getElementById('dia');
  const mes = document.getElementById('mes');
  const ano = document.getElementById('ano');
  const cargoDescrito = document.getElementById('Descrição');
  const divPessoal = document.getElementById('pessoal');
  const divProfissional = document.getElementById('profissional');
  
  window.onload = criaMenu();
  
  // Aqui abaixo, coloco todos os dados dentro de um array para poder usar no loop for, separando em duas categorias;
  
  const pessoalInfo = [nome, email, cpf, endereco, cidade, estado];
  const profissionalInfo = [resumo, cargo, cargoDescrito];
  
  function gerarCurriculum()  {
    // Nessa função o JS preenche duas divs com os dados do forms
    //Abaixo, preencho a div de informações pessoais, usando o id de cada input como parte da linha onde os dados são listados;
    for (let i = 0; i < pessoalInfo.length; i += 1) {
      const pInfo = document.createElement('p');
      let pessoalValue = pessoalInfo[i];
      lineHeader = pessoalValue.id;
      lineHeader = lineHeader.charAt(0).toUpperCase() + lineHeader.slice(1);
      pessoalValue = pessoalValue.value;
      pInfo.innerText = `${lineHeader}: ${pessoalValue}`;
      divPessoal.appendChild(pInfo);
    }
  
    //Abaixo, é a mesma coisa do loop acima, só que para as informações profissionais.
  
    for (let i = 0; i <= profissionalInfo.length; i += 1) {
      const pInfo = document.createElement('p');
      let profissionalValue = profissionalInfo[i];
      if (profissionalValue === undefined) {
        pInfo.innerText = `Data de Admissão: ${dia.value}/${mes.value}/${ano.value}`
        divProfissional.appendChild(pInfo);
      } else { 
        lineHeader = profissionalValue.id;
        lineHeader = lineHeader.charAt(0).toUpperCase() + lineHeader.slice(1);
        profissionalValue = profissionalValue.value;
        pInfo.innerText = `${lineHeader}: ${profissionalValue}`;
        divProfissional.appendChild(pInfo);
      }
    }
  }
  
  const vassoura = document.getElementById('vassoura');
  
  function limpa() {
    divPessoal.innerHTML = '';
    for (let i = 0; i < pessoalInfo.length; i += 1) {
      const item = pessoalInfo[i];
      item.value = '';
    }
    divProfissional.innerHTML = '';
    for (let i = 0; i < profissionalInfo.length; i += 1) {
      const item = profissionalInfo[i];
      item.value = '';
    }
  }
  
  vassoura.addEventListener('click', limpa);
  
  // Abaixo, o JS valida a informação do CPF para ter certeza que a quantidade de caracteres é a correta.
  
  document.getElementById('form').addEventListener('submit', (e) => {
    const erros = [];
    const errorDisplay = document.getElementById('erros');
    const cpf = document.getElementById('cpf');
    if (cpf.value.length > 11 || cpf.value.length < 11) {
      erros.push('Um CPF possui onze números.');
    } 
    if (erros.length > 0) {
      e.preventDefault();
      errorDisplay.innerText = erros;
    } else {
      e.preventDefault();
      gerarCurriculum();
    }
  });
document.getElementById('data').DatePickerX.init();
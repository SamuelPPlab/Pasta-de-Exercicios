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


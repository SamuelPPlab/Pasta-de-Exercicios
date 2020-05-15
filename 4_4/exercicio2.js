let output = '';
let info = 
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};


for ( i in info) {
  output = ''
  output += i + ': ' + info[i]+'; ';
  console.log(output);
}

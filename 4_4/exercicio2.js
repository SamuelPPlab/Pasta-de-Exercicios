//dando console.log em tudo que está na info.

let info = 
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};


for ( i in info) {
  console.log(i + ': ' + info[i]+'; ');
}

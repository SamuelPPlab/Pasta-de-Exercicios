// dando console.log apenas nos valores do objeto
let info = 
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (i in info) {
    console.log(info[i]);
}
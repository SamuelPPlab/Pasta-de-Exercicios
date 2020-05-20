// dando console.log em todos os valores de um objeto com array

let info = 
{
    personagem: ['Margarida', 'Tio Patinhas'],
    origem: ['Pato Donald', 'Christmas on Bear Mountain, Dell’s Four Color Comics #178'],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
    recorrente: ['Ambos são recorrentes.']
};

for (i in info) {
    let f = (info[i])
// esse if serve pra não deixar que um "undefined" apareça no fim do texto que o console.log imprime
    if (i === "recorrente"){
// a variável "f" é resetada toda vez que o for é executado, para que não acumule todos os valores do objeto.
        f = info[i]
        console.log(f[0])
    } else {
// esse else imprime os dois valores dentro do array de cada chave.
    console.log(f[0] + " e " + f[1])
}
}
let info = 
{
    personagem: ['Margarida', 'Tio Patinhas'],
    origem: ['Pato Donald', 'Christmas on Bear Mountain, Dell’s Four Color Comics #178'],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
    recorrente: ['Ambos são recorrentes.']
};

for (i in info) {
    let f = (info[i])
    if (i === "recorrente"){
        f = info[i]
        console.log(f[0])
    } else {
    console.log(f[0] + " e " + f[1])
}
}
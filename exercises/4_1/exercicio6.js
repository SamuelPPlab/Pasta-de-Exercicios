
function pecaDeXadrez (i) {
let iic = i.toUpperCase()
if (iic === "PEÃO") {
    console.log("Se move duas casas para frente na primeira jogada, e uma a partir da segunda, também pode capturar peças do adversário uma casa nas diagonais à sua frente.")
} else if (iic === "CAVALO") {
    console.log("Se move três casas em qualquer direção não diagonal e uma para a direita ou esquerda, formando um 'L'")
} else if (iic === "BISPO") {
    console.log("Se move nas diagonais em qualquer direção, e a distância que quiser.")
} else if (iic === "TORRE") {
    console.log("Se move quantas casas quiser em qualquer direção que não seja diagonal.")
} else if (iic === "RAINHA") {
    console.log("Se move  em qualquer direção quantas casas quiser.")
} else if (iic === "REI") {
    console.log("Se move uma casa em qualquer direção, e que o adversário não possa capturar na próxima rodada.")
} else {
    console.log("Isso aí não é uma peça de Xadrez.")
}
}


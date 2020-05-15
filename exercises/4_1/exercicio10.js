function grana (custo, venda) {
    let lucro = venda - custo;

    if (custo < 0 || venda < 0 || lucro < 0) {
    console.log("Você está devendo.")
    } else {
    console.log((lucro - (lucro * 0.2)) * 1000)
}
}
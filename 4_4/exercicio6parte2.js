function somaAteN (N) {
    for (let i = 1; i < N; i++) {
        let soma = i + i++
    }
    return(soma)
}
console.log(somaAteN(5));
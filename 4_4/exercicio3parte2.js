function menorNumeroComIndex (a) {
    //a é o array que a variavel recebe
    let mn = [a[0], 0];
    // mn é a variável que guarda o menor número que já houve no array. Ela é declarada com o primeiro numero do array a ser recebido, index 0.
    for (let i = 0; i < a.length; i++) {
    // esse for percorre o array recebido para procurar o maior numero dele.
        if (a[i] < mn[0]) {
    // esse if recebe algum numero do array, e compara com o número que já está na variavel mn(menor)
            mn = [a[i], i];
            console.log("Menor número: " + mn[0] + " Index: " + mn[1]);
        } else {
            console.log('heh, não vai conseguir passar debaixo da porta. Numero: ' + mn[0] + " Index: " + mn[1])
        }  
    }}
    
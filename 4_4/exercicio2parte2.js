
function maiorNumeroComIndex (a) {
//a é o array que a variavel recebe
let mn = [a[0], 0];
// mn é a variável que guarda o maior número que já houve no array. Ela é declarada com o primeiro numero do array a ser recebido, index 0.
for (let i = 0; i < a.length; i++) {
// esse for percorre o array recebido para procurar o maior numero dele.
    if (a[i] > mn[0]) {
// esse if recebe algum numero do array, e compara com o número que já está na variavel mn(maior número)
        mn = [a[i], i];
        console.log("Maior número: " + mn[0] + " Index: " + mn[1]);
    } else {
        console.log('heh, não chega aos meus pes. Numero: ' + mn[0] + " Index: " + mn[1])
    }  
}}

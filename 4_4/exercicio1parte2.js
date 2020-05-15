function verificaPalindromo (p) {
// p é a palavra que a função recebe para avaliar.   
let pd = p .split('');
//pd é a palavra recebida desmembrada, letra por letra.
let comp = [];
// comp é a variavel onde a palavra recebida é guardada de trás pra frente
let éPalíndromo = false;
// variável que vai ser imprimida para dizer se a palavra é um palíndromo ou não
for (let i = 0; i <= pd.length; i++){
// esse "for" é onde a palavra recebida é invertida.
    if (i === 0) {
// esse "if" é para não deixar que um 'undefined' seja parte da variável que tem a palavra de tras pra frente.
       comp[0] = (pd[pd.length -i]);
    } else {
       comp += (pd[pd.length -i]);
    }
} 

if (comp === p) {
   éPalíndromo = true;
   console.log("Essa palavra é um palíndromo? " + éPalíndromo)
} else {
   console.log("Essa palavra é um palíndromo? " + éPalíndromo)
}
}

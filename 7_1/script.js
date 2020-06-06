//Exercicio 1
function fatorial(n) {
  let soma = 1;
  for (let i = 2; i <= n; i += 1) soma = soma * i;
  return soma;
}
console.log(fatorial(5));

//Exercicio 2

function maiorPalavra (array) {
  let an = 0;
  let mp = 0;
  const arrayS = array.split(' ');
  for (let i = 0; i < arrayS.length; i ++) {
    const pd = arrayS[i].split('');
    let t = pd.length;
  if(t > mp) {
    mp = t; 
    an = arrayS[i];
  }
  }
  return(an);
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))

//Exercicio 3

const botao = document.getElementById('botao');
let contador = 0;
botao.addEventListener('click', function () {
  const display = document.getElementById('display');
  contador += 1;
  console.log(contador);
  display.innerHTML = contador;
});

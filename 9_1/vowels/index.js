// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const letras = str.toLowerCase().split('');
  let contador = 0;
  for(let i = 0; i < letras.length; i += 1) {
    if(letras[i] === 'a' || letras[i] === 'e' || letras[i] === 'i' || letras[i] === 'o' || letras[i] === 'u') {
      contador += 1;
    }
  }
  return contador;
}

module.exports = vowels;

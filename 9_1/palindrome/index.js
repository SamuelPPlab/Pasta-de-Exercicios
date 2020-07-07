// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const linha = str.split('');
  const swapper = (arr) => {
    let retorno = '';
    for(let i = arr.length - 1; i >= 0; i += 1) {
      retorno += arr[i];
    }
    return retorno;
  }
  const swapped = swapper(linha);
  if(str === swapped) {
    return (true);
  } else {
    return (false);
  }
}

module.exports = palindrome;

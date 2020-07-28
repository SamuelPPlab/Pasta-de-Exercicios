// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let linha = n.toString();
  linha = linha.split('');
  const swapper = (arr) => {
    let retorno = '';
    for(let i = arr.length - 1; i >= 0; i += 1) {
      retorno += arr[i];
    }
    return retorno;
  }
  let inverso = swapper(linha);
  inverso = parseInt(inverso);
  return inverso;
}

module.exports = reverseInt;

//Exercicio 1

const assert = require('assert');

const addOne = (arr) => {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(arr[i] + 1);
  }
  return(out)
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);

//Exercicio 2

const assert = require('assert');

function wordLengths (arr) {
  const array = [];
  for (let i = 0; i < arr. length; i++) {
    const palarvra = arr[i].split('');
    array.push(palarvra.length);
  }
  return(array);
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
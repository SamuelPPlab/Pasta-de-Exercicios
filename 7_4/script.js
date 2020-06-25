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
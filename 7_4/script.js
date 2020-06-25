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

//Exercicio 3

const assert = require('assert');

const findTheNeedle = (arr, needle) => {
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] === needle) {
    return(i);
  } else {
    return(-1);
  }
  }
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

//Exercicio 4

const greetPeople = (people) => {
  const total = [];
  for (const person in people) {
    let greeting = 'Hello ';
    total.push(greeting += people[person]);
  }
  return total
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(greetPeople(parameter), result)
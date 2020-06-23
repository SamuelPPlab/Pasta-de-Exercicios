//Parte 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

assert.strictEqual(typeof(sum), "function");
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.strictEqual(sum(4, '5'), 9);

//parte 2

const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

assert.strictEqual(myIndexOf([1, 2, 3, 4], 3), 2);
assert.strictEqual(myIndexOf(myIndexOf([1, 2, 3, 4], 5)), -1);

//Parte 3

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

assert.strictEqual(mySum([1, 2, 3, 4]), 10);
assert.strictEqual(mySum([1, -2, -3, 4]), 0);

// Parte 4

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const teste = [2, 3, 4, 5, 6, 7];

myRemove(teste, 6);
assert.deepStrictEqual(teste, [2, 3, 4, 5, 6, 7]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])

// Parte 5

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
};

const teste2 = [1, 2, 3, 4, 5, 5, 6];
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

myRemoveWithoutCopy(teste2, 1);
assert.strictEqual(teste2.length, 6);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//Parte 6

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz')
assert.strictEqual(myFizzBuzz(3), 'fizz')
assert.strictEqual(myFizzBuzz(5), 'buzz')
assert.strictEqual(myFizzBuzz(2), 2)
assert.strictEqual(myFizzBuzz('a'), false)

//Parte 7

const assert = require('assert');

const thereIs = '';

assert.strict(typeof(thereIs) !== undefined);

//Parte 8

const assert = require('assert');

function thereIs() {}

assert.strict(typeof(thereIs), 'function')
const sum = require("./script");
const myIndexOf = require("./myIndex");
const mySum = require("./mySum");
const myRemove = require("./myRemove");
const myFizzBuzz = require("./fizzbuzz");
const thereIs = require("./existe");
const isAbove = require("./comparator");

describe ('sum', () => {
  it('Should sum up a and b', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(() => {sum(4, '5')}).toThrow();
    expect(() => {sum(4, '5')}).toThrow(/parameters must be numbers/)
  });
  })

describe ('myIndexOf', () => {
  it('Should return the index of a number in an array', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  })
})

describe ('mySum', () => {
  it('Should sum all the numbers of an array', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
    expect(mySum([1, -2, -3, 4])).toBe(0);
  })
})

describe ('myRemove', () => {
  it('should remove an item from an array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr)).toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe ('fizzbuzz', () => {
  it('should return fizzbuzz if divisible by 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  }),
  it('should return fizz if divisible by 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  }), 
  it('should return buzz if divisible by 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  }),
  it('should return the parameter if it is not divisible by 3, 5, or 15', () => {
    expect(myFizzBuzz(2)).toBe(2);
  }),
  it('should return false if parameter !number', () => {
    expect(myFizzBuzz('irineu')).toBe(false);
  }) 
})

describe('thereisvar', () => {
  it('should exist', () => {
    expect(typeof(thereIsvar)).not.toBe(undefined);
  })
})

describe('thereis', () => {
  it('should be a funcion', () => {
    expect(typeof(thereIs)).toBe('function');
  })
})

describe('isabove', () => {
  it('should return true if a > b', () => {
    expect(isAbove(2, 1)).toBe(true);
  }), 
  it('should return false if a < b', () => {
    expect(isAbove(1, 2)).toBe(false);
  })
})
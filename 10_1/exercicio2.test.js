const { TestResult } = require("@jest/types");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }
      return reject({ error: 'User with ' + id + ' not found.' });
  });
}
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

test('retorna usuario correto, usando promises', () => {
  expect.assertions(1);
  return findUserById(4).then((data) => {
    expect(data).toStrictEqual({name: 'Mark'});
  });
});

test('pede um usuario que não existe, usando promises', () => {
  return findUserById(7).catch((data) => {
    expect(data).toStrictEqual({ error: 'User with 7 not found.'});
  });
}
)
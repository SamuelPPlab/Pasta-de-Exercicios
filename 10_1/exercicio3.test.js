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

test('retorna usuario correto com try/catch', async () => {
  const data = await findUserById(4);
  expect(data).toStrictEqual({ name: 'Mark' })
});

test('retorna erro quando passado um id inexistente', async () => {
  try {
    await findUserById(7);
  } 
  catch(error) {
    expect(error).toStrictEqual({ error: 'User with 7 not found.' })
  }
})
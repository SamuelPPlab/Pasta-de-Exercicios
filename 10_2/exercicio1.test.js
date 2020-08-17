const exercicio1 = require('./exercicio1');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  exercicio1.randomNo = jest.fn().mockReturnValue(10);

  expect(exercicio1.randomNo()).toBe(10);
  expect(exercicio1.randomNo).toHaveBeenCalled();
  expect(exercicio1.randomNo).toHaveBeenCalledTimes(1);
});
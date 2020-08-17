const exercicio = require('./exercicio1');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  exercicio.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b); //configura um codigo diferente pra função que é usado apenas uma vez.

  expect(exercicio.randomNumber(10, 2)).toBe(5); //testa se o resultado do mock implementado é o esperado
  expect(exercicio.randomNumber).toHaveBeenCalled(); //testa se a função mock foi chamada
  expect(exercicio.randomNumber).toHaveBeenCalledTimes(1); // testa quantas vezes o mock foi chamado
  expect(exercicio.randomNumber).toHaveBeenCalledWith(10, 2); // testa se os parâmetros passados para função são os esperados.
});
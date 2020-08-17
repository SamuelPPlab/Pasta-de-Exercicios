const exercicio = require('./exercicio1');

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    exercicio.randomNo = jest.fn().mockImplementation((a, b, c) => a * b * c); // define um codigo alternativo pra função

    expect(exercicio.randomNo(2, 3, 4)).toBe(24); //testa se o codigo alternativo está funcionando como o esperado.
    expect(exercicio.randomNo).toHaveBeenCalled();// testa se o codigo alternativo foi executado 
    expect(exercicio.randomNo).toHaveBeenCalledTimes(1);// testa quantas vezes a função alternativa foi chamada
    expect(exercicio.randomNo).toHaveBeenCalledWith(2, 3, 4);// testa os parametros que foram usados para chamar a função alternativa
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    exercicio.randomNo.mockReset(); // reseta a função para o seu estado original, removendo qualquer codigo alternativo ou resultado simulado
    expect(exercicio.randomNo).toHaveBeenCalledTimes(0); // testa quantas vezes o codigo foi chamado dentro do escopo daquele teste

    exercicio.randomNo.mockImplementation(a => a * 2);// cria um codigo alternativo para executar no lugar da função original

    expect(exercicio.randomNo(5)).toBe(10); // testa se o resultado da função é o esperado
    expect(exercicio.randomNo).toHaveBeenCalled();  // testa se a função foi chamada
    expect(exercicio.randomNo).toHaveBeenCalledTimes(1); // testa se a função foi chamada a quantidade esperada de vezes.
    expect(exercicio.randomNo).toHaveBeenCalledWith(5); // testa se o parametro que foi passado para a função é o esperado.
  });
});
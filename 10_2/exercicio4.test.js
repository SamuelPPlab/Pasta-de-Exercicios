const exercicio = require("./exercicio4");
jest.mock("./exercicio4");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    exercicio.firstFunction.mockImplementation(a => a.toLowerCase()); // define um codigo alternativo pra função a ser testada

    expect(exercicio.firstFunction("UPPERCASE")).toBe("uppercase");// testa se o retorno da função é o esperado
    expect(exercicio.firstFunction).toHaveBeenCalled();// testa se a função foi chamada
    expect(exercicio.firstFunction).toHaveBeenCalledTimes(1);// testa se a função foi chamada pelo número esperado de vezes
    expect(exercicio.firstFunction).toHaveBeenCalledWith("UPPERCASE");//testa se o parametro passado pra função foi o esperado
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    exercicio.secondFunction.mockImplementation(a => a.charAt(a.length - 1));// define um código alternativo pra função

    expect(exercicio.secondFunction("letter")).toBe("r");//testa se o retorno é o esperado
    expect(exercicio.secondFunction).toHaveBeenCalled();// testa se a função foi chamada 
    expect(exercicio.secondFunction).toHaveBeenCalledTimes(1);// testa se a função foi chamada pelo número esperado de vezes
    expect(exercicio.secondFunction).toHaveBeenCalledWith("letter");// testa se o parametro passado pra função é o esperado.
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    exercicio.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));// define um código alternativo pra função que foi chamada;

    expect(exercicio.thirdFunction("tr", "y", "be")).toBe("trybe");//testa se o retorno da função é o esperado 
    expect(exercicio.thirdFunction).toHaveBeenCalled();// testa se a função foi chamada
    expect(exercicio.thirdFunction).toHaveBeenCalledTimes(1);// testa se a função foi chamada pelo numero esperado de vezes 
    expect(exercicio.thirdFunction).toHaveBeenCalledWith("tr", "y", "be"); //testa se o parametro passado para a função foi o mesmo do teste.
  });
});
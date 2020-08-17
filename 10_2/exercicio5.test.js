const exercicio = require("./exercicio4");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest // cria uma variavel contendo tanto a função original, quanto a alternativa
      .spyOn(exercicio, "firstFunction") // permite alternar entre o codigo original e o mock
      .mockImplementation(a => a.toLowerCase());// cria o codigo alternativo

    expect(first("UPPERCASE")).toBe("uppercase");// testa se o codigo alternativo funciona como o esperado
    expect(first).toHaveBeenCalled();// testa ser o codigo alternativo foi chamado
    expect(first).toHaveBeenCalledTimes(1);// testa quantas vezes a função alternativa foi chamada
    expect(first).toHaveBeenCalledWith("UPPERCASE");// testa o parametro que foi passado para o código alternativo

    exercicio.firstFunction.mockRestore(); //Restaura o codigo original da função, fazendo com que o mock seja deixado de lado

    expect(exercicio.firstFunction("lowercase")).toBe("LOWERCASE");// testa se o codigo original funciona corretamente.
  });
});
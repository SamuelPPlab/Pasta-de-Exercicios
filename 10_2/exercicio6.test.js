const service = require("./exercicio6");
describe("testando a requisição", () => {
  service.fetchDog = jest.fn(); // adiciona o jest.fn para poder fazer mocks na função depois
  afterEach(service.fetchDog.mockReset);// depois de cada teste, reseta os mocks e roda o codigo original no proximo teste

  test("testando requisição caso a promisse resolva", async () => {
    service.fetchDog.mockResolvedValue("request sucess");// simula um retorno especifico da função a ser testada

    service.fetchDog();// chama a função 
    expect(service.fetchDog).toHaveBeenCalled();// testa se a função foi chamada
    expect(service.fetchDog).toHaveBeenCalledTimes(1);// testa se a função foi chamada pelo número de vezes esperado
    expect(service.fetchDog()).resolves.toBe("request sucess");//chama a função e testa se o retorno da função é o esperado
    expect(service.fetchDog).toHaveBeenCalledTimes(2);//testa se a função foi chamada pelo número de vezes esperado
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");// simula o retorno de erro da promise 
    expect(service.fetchDog).toHaveBeenCalledTimes(0);// testa se a função foi chamada pelo número de vezes esperado
    expect(service.fetchDog()).rejects.toMatch("request failed");// testa se o retorno é o esperado
    expect(service.fetchDog).toHaveBeenCalledTimes(1);//testa se a função foi chamada pelo número de vezes esperado
  });
});
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// Imagino que será 1-beforeEach > 1-test > 1-afterEach  e em seguida 2-beforeEach > 2-test > 2-AfterEach
// Depois de rodar, notei que os que estão antes do describe, também rodam antes e depois do bloco describe, o que foi uma coisa inesperada pra mim.
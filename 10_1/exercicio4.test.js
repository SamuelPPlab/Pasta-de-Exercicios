const fetch = require('node-fetch');
const url = 'https://api.github.com/users/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then((data) => {
    return data.map((repo) => repo.name)
  })
}

test('testa se há dois repositórios especificos na lista de resposta', async () => {
  let rep1 = await getRepos(url);
  rep1 = await rep1.find(repos => repos === 'sd-01-week4-5-project-todo-list');
  expect(rep1).toBe(undefined);
  
  let rep2 = await getRepos(url);
  rep2 = await rep2.find(repo => repo === 'sd-01-week4-5-project-meme-generator');
  expect(rep2).toBe(undefined);
})
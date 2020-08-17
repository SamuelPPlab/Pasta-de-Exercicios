export const readFavoritePokemonIds = () => (
  JSON.parse(localStorage.getItem('favoritePokemonIds')) || []//lê no local storage os pokemons guardados como favoritos
);

const saveFavoritePokemons = (pokemons) => (
  localStorage.setItem('favoritePokemonIds', JSON.stringify(pokemons))//recebe um array de pokemons para guardar no local storage como favorito
);

const addPokemonToFavorites = (pokemonId) => {
  const favoritePokemons = readFavoritePokemonIds();//chama a função que busca no local storage os pokemons favoritos
  const newFavoritePokemons = [...favoritePokemons, pokemonId];// guarda junto com os já favoritados, o novo pokemon

  saveFavoritePokemons(newFavoritePokemons);//salva o novo arrya
};

const removePokemonFromFavorites = (pokemonId) => {
  const favoritePokemons = readFavoritePokemonIds();//busca os pokemons favoritos no local storage
  const newFavoritePokemons = favoritePokemons.filter((id) => id !== pokemonId);//retira do array o pokemon escolhido

  saveFavoritePokemons(newFavoritePokemons);//salva o novo array
};

export const updateFavoritePokemons = (pokemonId, isFavorite) => (//recebe um pokemon, e retira do array de favoritos caso ele já esteja lá, e adiciona caso ele não esteja
  isFavorite ? addPokemonToFavorites(pokemonId) : removePokemonFromFavorites(pokemonId)
);
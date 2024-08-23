export async function getPokemons(pageNumber) {
  const limit = 20;
  const offset = pageNumber * limit;
  const reponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );
  const data = await reponse.json();
  return data;
}
export async function getPokemonDetails(url) {
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
}

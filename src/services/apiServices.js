import { myFetch } from "../helpers/fetchHelper";

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

export function getPokemonEvolutions(url) {
  return myFetch(url).then((data) => {
    return myFetch(data.evolution_chain.url).then((data) => {
      console.log("Chain", data);
      const names = getEvolutionsNames(data.chain);
      const evolutionDetails = getEvolutionsDetails(names);
      return evolutionDetails;
    });
  });
}

function getEvolutionsNames(chain) {
  const names = [];

  function getName(param) {
    // if (param.evolves_to.length > 1) {
    //   for (const e of param.evolves_to) {
    //     if (e.evolves_to.length !== 0) {
    //       getName(e.evolves_to[0]);
    //     }
    //     names.push(e.species.name);
    //   }
    // } else {
    if (param.evolves_to.length !== 0) {
      getName(param.evolves_to[0]);
    }
    names.push(param.species.name);
    // }
  }

  getName(chain);

  names.reverse();

  return names;
}

function getEvolutionsDetails(names) {
  const promisesArray = [];
  for (const value of names) {
    const promise = getSinglePokemon(value);
    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}

export function getSpeciesDetails(speciesURL) {
  return myFetch(speciesURL);
}

export async function getSinglePokemon(query) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

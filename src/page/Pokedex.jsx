import React, { useEffect, useState } from "react";
import { getPokemonDetails, getPokemons } from "../services/apiServices";
import PaginationButons from "../components/pokedex/PaginationButons";
import { useMultipleFetch } from "../customHook/useFetch";
import Loading from "../components/comman/Loading";
import SearchBar from "../components/pokedex/SearchBar";
import PokemonsList from "../components/pokedex/PokemonsList";
import SearchedDataList from "../components/pokedex/SearchedDataList";

function Pokedex() {
  const limit = 20;
  const [page, setPage] = useState(0);
  const offset = limit * page;
  const { loading, data, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );

  const [query, setQuery] = useState();
  const [searchedData, setSearchedData] = useState();

  if (loading) return <Loading />;
  if ((!loading && error) || (!loading && !data)) {
    return <h1>Somthing Went Wrong...</h1>;
  }

  return (
    <div style={{ backgroundColor: "#CCD3CA" }}>
      <SearchBar
        setQuery={setQuery}
        setSearchedData={setSearchedData} 
        query={query}
      />
      {searchedData && query ? (
        <SearchedDataList pokemon={searchedData} />
      ) : (
        <PokemonsList data={data} />
      )}
      <PaginationButons setPage={setPage} page={page} />
    </div>
  );
}

export default Pokedex;

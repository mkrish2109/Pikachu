import React, { useEffect, useState } from "react";
import BasicInfo from "../components/pokemonDetails/basicInfo/BasicInfo";
import Loading from "../components/comman/Loading";
import { useFatch } from "../customHook/useFetch";
import NextPrevButtons from "../components/pokemonDetails/NextPrevButtons";
import { useParams } from "react-router-dom";
import MoreInfo from "../components/pokemonDetails/moreInfo/MoreInfo";
// import EvolutionInfo from "../components/pokemonDetails/evaluationInfo/EvaluationInfo";
import EvolutionsRow from "../components/pokemonDetails/evaluationInfo/EvolutionsRow";
import { getSinglePokemon } from "../services/apiServices";

function PokemonDetails() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);

  const [name, setName] = useState(id);

  const { loading, data, error } = useFatch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  useEffect(() => {
    getSinglePokemon(name).then((data) => {
      setPokemon(data);
    });
  }, [name]);

  if (loading) return <Loading />;

  if ((!loading && !data) || error) {
    return <h2>Something went wrong</h2>;
  }
  const { id: number } = data;

  if (!pokemon) return null;
  return (
    <div style={{ backgroundColor: "#f6f5f5", paddingBottom: "2rem" }}>
      <NextPrevButtons number={number} setName={setName} />
      <BasicInfo data={data} />
      <MoreInfo stats={data.stats} types={data.types} />
      <EvolutionsRow species={pokemon.species} />
    </div>
  );
}

export default PokemonDetails;

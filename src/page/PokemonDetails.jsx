import React, { useState } from "react";
import BasicInfo from "../components/pokemonDetails/basicInfo/BasicInfo";
import Loading from "../components/comman/Loading";
import { useFatch } from "../customHook/useFetch";
import NextPrevButtons from "../components/pokemonDetails/NextPrevButtons";
import { useParams } from "react-router-dom";
import MoreInfo from "../components/pokemonDetails/moreInfo/MoreInfo";

function PokemonDetails() {
  const { id } = useParams();

  const [name, setName] = useState(id);

  const { loading, data, error } = useFatch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (loading) return <Loading />;

  if ((!loading && !data) || error) {
    return <h2>Something went wrong</h2>;
  }

  const { id: number } = data;
  return (
    <div style={{ backgroundColor: "#f6f5f5", paddingBottom: "2rem" }}>
      <NextPrevButtons number={number} setName={setName} />
      <BasicInfo data={data} />
      <MoreInfo stats={data.stats} types={data.types} />
    </div>
  );
}

export default PokemonDetails;

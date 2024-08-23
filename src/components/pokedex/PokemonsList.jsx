import React from "react";
import PokemonCard from "./PokemonCard";
function PokemonsList(props) {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "16px",
    justifyContent: "center",
    padding: "16px",
    width: "100%",
  };
  return (
    <div style={{ padding: "4px 32px" }}>
      <div style={gridStyles}>
        {props.data.map(function (pokemon, index) {
          return (
            <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              id={pokemon.id}
              key={index}
              tags={pokemon.types.map(function (type) {
                return type.type.name;
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokemonsList;

import React, { useEffect, useState } from "react";
import styles from "./evolutionsRow.module.css";
import { getPokemonEvolutions } from "../../../services/apiServices";
import EvolutionCard from "./evolutionCard/EvolutinCard";

function EvolutionsRow(props) {
  const { species } = props;
  const [evolutions, setEvolutions] = useState(null);

  useEffect(() => {
    getPokemonEvolutions(species.url).then((data) => {
      const filtered = data.filter((value) => value !== undefined);
      setEvolutions(filtered);
    });
  }, [species.url]);

  if (!evolutions || !evolutions.length) {
    return null;
  }

  return (
    <div className={styles.containerMain}>
      <h2 className={styles.title}>Evolutions</h2>
      <div className={styles.containerInner}>
        {evolutions?.map((pokemon) => {
          return <EvolutionCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default EvolutionsRow;

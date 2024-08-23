import React from "react";
import { useNavigate } from "react-router-dom";
import { getTagBackgroundColor } from "../../utils/tegsHelper.js";
import styles from "../../styles/pokedex/pokemonCard.module.css";
function PokemonCard({ image, name, tags, id }) {
  const navigate = useNavigate();

  const nameStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
    textAlign: "center",
  };

  const tagsStyles = {};

  function handleClick() {
    navigate(`/pokemon/${name}`);
  }

  return (
    <div className={styles.cardContainerStyles} onClick={handleClick}>
      <h3 style={{ color: "#747264", textAlign: "left" }}>#{id}</h3>
      <div className={styles.imageContainerStyles}>
        <img src={image} alt={name} className={styles.imageStyles} />
      </div>
      <h2 className={styles.nameStyles}>{name}</h2>
      <div className={tagsStyles}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={styles.tagStyles}
            style={{
              backgroundColor: getTagBackgroundColor(tag.toLowerCase()),
            }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;

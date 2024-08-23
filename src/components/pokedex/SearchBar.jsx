import React from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { getPokemonDetails } from "../../services/apiServices";
import styles from "../../styles/pokedex/SearchBar.module.css";

function Searchbar(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={`${styles.searchForm} ${styles.form}`}>
          <label>
            <p className={styles.screenReaderText}>Number</p>
            <input
              type="search"
              className={styles.searchField}
              placeholder="Type something..."
              onChange={(e) => {
                props.setQuery(e.target.value);
                if (e.target.value === "") {
                  props.setSearchedData(null);
                }
              }}
            />
          </label>
          <button
            type="button"
            className={`${styles.searchSubmit} ${styles.button}`}
            onClick={async () => {
              const data = await getPokemonDetails(
                `https://pokeapi.co/api/v2/pokemon/${props.query}`
              );
              props.setSearchedData(data);
            }}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;

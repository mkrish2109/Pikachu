import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokedex</h1>
      </div>
      <ul className={styles.links}>
        <li className={styles.navLink}>
          <NavLink
            to="/"
            style={{ color: "white" }}
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : "";
            }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pokedex"
            style={{ color: "white", textDecoration: "none" }}
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : "";
            }}>
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : "";
            }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : "";
            }}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

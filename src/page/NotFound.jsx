import React, { useEffect, useState } from "react";
import styles from "../styles/notFound.module.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  // useEffect (() => {
  //   const id = setInterval(() => {
  //     setCount(count - 1);
  //     if (count === 0) {
  //       navigate("/");
  //     }
  //     clearInterval(id);
  //   }, 1000);
  // }, [count, navigate]);
  function handleClick() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>404</h1>
      </div>
      <div>
        <p>Oops! Something is wrong.</p>
        <a className={styles.button} onClick={handleClick}>
          <i className={styles.icon_home}></i> Go back in initial page, is
          better.
        </a>
      </div>
    </div>
  );
}

export default NotFound;

import React from "react";
import styles from "../../../styles/home/inforow.module.css";

function InfoRow(props) {
  if (props.contentFirst) {
    return (
      <div className={styles.container}>
        <div className={`${styles.descContainer} ${styles.descContainerCF}`}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <button>Know More</button>
        </div>
        <div className={`${styles.imgContainer} ${styles.imgContainerCF}`}>
          <img src={props.src} alt={props.title} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={props.src} alt={props.title} />
        </div>
        <div className={styles.descContainer}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <button>Know More</button>
        </div>
      </div>
    );
  }
}

export default InfoRow;

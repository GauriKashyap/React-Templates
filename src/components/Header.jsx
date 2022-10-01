import React from "react";

import styles from "../style/Header.module.css";
import Partciles from "./Partciles";

const Header = (props) => {
  return (
    <header className={styles.welcomeSection}>
      <Partciles />
      <div className={styles.silhouette} />
      <div className={styles.container}>
        <h1>
          <span className={styles.line}>I do</span>
          <span className={styles.line}>abcdefd</span>
          <span className={styles.line}>
            <span className={styles.color}>&</span> xyzpqdfm.
          </span>
        </h1>
        <div className={styles.buttons}>
          <a href="#projects">Link 1</a>
          <a href="#contact" className={styles.cta}>
            contact me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

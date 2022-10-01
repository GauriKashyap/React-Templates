import React from "react";

import styles from "../style/NavigationBar.module.css"
import Menu from "./Menu";

const NavigationBar = (props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <p className={styles.brand}>
            Name
            <strong>Here</strong>
          </p>
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

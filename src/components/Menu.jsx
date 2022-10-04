import React from "react";

import styles from "../style/Menu.module.css";

const Menu = (props) => {
  const [navVisible, setNavVisible] = React.useState(false);

  const toggleMenu = () => {
    setNavVisible((visible) => !visible);
  };

  return (
    <>
      <nav>
        <button
          className={
            navVisible
              ? [styles.toggleMenu, styles.active].join(" ")
              : styles.toggleMenu
          }
          onClick={toggleMenu}
        >
          <span></span>
        </button>
      </nav>
      <div
        className={
          navVisible ? [styles.menu, styles.open].join(" ") : styles.menu
        }
      >
        <nav className={styles.mainNav}>
          <ul>
            <li data-text="About me">
              <a href="#about"> About me </a>
            </li>
            <li data-text="Projects">
              <a href="#projects"> Projects </a>
            </li>
            <li data-text="Skills">
              <a href="#skills"skills> Skills </a>
            </li>
            <li data-text="Experience">
              <a href="#experience"> Experience</a>
            </li>
          </ul>
        </nav>

        <footer className={styles.menuFooter}>
          <nav className={styles.footerNav}>
            <ul>
              <li>
                <a href="#"> social media 1 </a>
              </li>
              <li>
                <a href="#"> social media 2 </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Menu;

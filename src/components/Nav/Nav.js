import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink
        data-aos-duration="2000"
        data-aos="fade"
        to="/"
        exact
        activeClassName={styles.navActive}
        className={styles.navItem}
      >
        Start
      </NavLink>
      <NavLink
        data-aos-duration="1000"
        data-aos="fade"
        data-aos-delay="200"
        to="/galeria"
        activeClassName={styles.navActive}
        className={styles.navItem}
      >
        Galeria
      </NavLink>
      <NavLink
        data-aos-duration="1000"
        data-aos="fade"
        data-aos-delay="400"
        to="/kontakt"
        className={styles.navItem}
        activeClassName={styles.navActive}
      >
        Kontakt
      </NavLink>
      <NavLink
        data-aos-duration="1000"
        data-aos="fade"
        data-aos-delay="600"
        to="/o-nas"
        activeClassName={styles.navActive}
        className={styles.navItem}
      >
        O nas
      </NavLink>
    </nav>
  );
};
export default Nav;

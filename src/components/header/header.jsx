import React from "react";
import styles from "./header.module.css";
export default function Header(props) {
  return (
    <header className={styles.headerContainer}>
      <h4 className={styles.headerTitle}>Rachael Concessio</h4>
      <nav className={styles.nav}>
        <div className={styles.navItem}>About Me</div>
        <div className={styles.navItem}>Work</div>
      </nav>
    </header>
  );
}

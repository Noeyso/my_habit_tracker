import React, { useEffect } from "react";
import Logo from "../../common/image/logo.png";
import styles from "./header.module.css";

const Header = ({ count, complete }) => {
  const today = new Date();

  console.log(Date.now);
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Habit Tracker</h1>
        <img className={styles.img} src={Logo} alt="logo" />
      </div>
      <div className={styles.today}>
        <h5>{today.toLocaleDateString()}</h5>
        <ul className={styles.gage}>
          {Array(count)
            .fill(0)
            .map((e, i) => {
              console.log(i);
              return i < complete ? (
                <li key={i} className={`${styles.block} ${styles.color}`}></li>
              ) : (
                <li key={i} className={styles.block}></li>
              );
            })}
        </ul>
      </div>
    </header>
  );
};
export default Header;

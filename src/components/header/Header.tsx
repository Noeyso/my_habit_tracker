import React, { useEffect } from "react";
import styles from "./Header.module.css";

const Header: React.FC<{}> = (props) => {
  console.log(Date.now);
  return (
    <header className={styles.container}>
      <div className={styles.contents}>
        <h1 className={styles.title}>나의 습관 기록</h1>
      </div>
    </header>
  );
};
export default Header;

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.contents}>
        <h1 className={styles.title}>나의 습관 기록</h1>
      </div>
    </header>
  );
};
export default Header;

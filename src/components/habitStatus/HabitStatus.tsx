import React from "react";
import styles from "./HabitStatus.module.css";
const HabitStatus = () => {
  return (
    <section className={styles.container}>
      <section className={styles.top}>
        <span>오늘 하루도 화이팅!</span>
        <button>+습관 추가</button>
      </section>

      <section className={styles.progress_bar}>
        <div className={styles.gauge_container}>
          <div className={styles.gauge}></div>
        </div>
        <span>{50}% 달성!</span>
      </section>
    </section>
  );
};

export default HabitStatus;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { HABIT_TYPE } from "../../modules/habit/types";
import HabitAddForm from "../form/habitAddForm/HabitAddForm";
import styles from "./HabitStatus.module.css";
const HabitStatus = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const habits: HABIT_TYPE[] = useSelector(
    (state: RootState) => state.habit.habit
  );
  const [gauge, setGauge] = useState(0);

  useEffect(() => {
    let count = 0;
    habits.map((habit) => {
      habit.weeks.map((week) => {
        if (week) {
          count += 1;
          console.log(gauge);
        }
      });
    });
    setGauge(Math.floor((count / habits.length / 7) * 100));
  }, [habits]);

  const controlForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <section className={styles.container}>
      <section className={styles.top}>
        <span>이번주도 화이팅!</span>
        <button onClick={controlForm}>+습관 추가</button>
      </section>

      <section className={styles.progress_bar}>
        <div className={styles.gauge_container}>
          <div className={styles.gauge} style={{ width: `${gauge}%` }}></div>
        </div>
        <span>{gauge}% 달성!</span>
      </section>
      {isOpenForm && <HabitAddForm closeForm={controlForm} />}
    </section>
  );
};

export default HabitStatus;

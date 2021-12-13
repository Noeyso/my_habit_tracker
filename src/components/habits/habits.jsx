import React, { useState } from "react";
import Habit from "../habit/habit";
import HabitAddForm from "../habitAddForm/habitAddForm";
import styles from "./habits.module.css";
import Plus from "../../common/image/plus.png";
const Habits = ({ habits, handleAdd, handleDelete, handleComplete }) => {
  const [isShow, setIsShow] = useState(false);
  const onModal = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.habits}>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
      <button className={styles.button} onClick={onModal}>
        <img className={styles.plus} src={Plus} alt="plus" />
      </button>
      {isShow && <HabitAddForm closeModal={onModal} handleAdd={handleAdd} />}
    </div>
  );
};
export default Habits;

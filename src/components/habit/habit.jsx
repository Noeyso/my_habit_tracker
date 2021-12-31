import React, { useState } from "react";
import ColorPicker from "../colorPicker/colorPicker";
import styles from "./habit.module.css";
import Delete from "../../common/image/trash.png";
import Checked from "../../common/image/checked.png";
const Habit = ({ habit, handleDelete, handleComplete }) => {
  const { name, color } = habit;
  const [isDone, setIsDone] = useState(habit.done);
  const onComplete = () => {
    handleComplete(habit.id);
    setIsDone(!isDone);
  };
  const onDelete = () => {
    handleDelete(habit);
  };
  return (
    <li className={styles.container}>
      <div
        style={{ backgroundColor: color }}
        className={styles.colorHeader}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.buttons}>
          {isDone ? (
            <button>
              <img className={styles.checked} src={Checked} alt="done" />
            </button>
          ) : (
            <button className={styles.complete} onClick={onComplete}>
              완료
            </button>
          )}
          <button className={styles.delete} onClick={onDelete}>
            <img className={styles.trash} src={Delete} alt="delete" />
          </button>
        </div>
      </div>
    </li>
  );
};
export default Habit;

import React, { useRef, useState } from "react";
import styles from "./habitAddForm.module.css";
import Close from "../../common/image/close.png";
import Add from "../../common/image/add.png";
import ColorPicker from "../colorPicker/colorPicker";
const HabitAddForm = ({ closeModal, handleAdd }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState({});

  const showName = () => {
    setName(inputRef.current.value);
    console.log(name);
  };
  const onClick = (event) => {
    event.preventDefault();
    showName();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      showName();
    }
  };
  const selectColor = (bg) => {
    setColor(bg);
    setStyle({ backgroundColor: bg });
  };

  const addHabit = () => {
    closeModal();
    handleAdd(name, color);
  };

  return (
    <div className={styles.container}>
      <section className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.title}>Add Habit</h2>
          <button onClick={closeModal}>
            <img className={styles.close} src={Close} alt="close" />
          </button>
        </header>
        <section className={styles.body}>
          <h5 className={styles.habitName}>Habit Name</h5>
          <form className={styles.addForm}>
            <input
              className={styles.addInput}
              ref={inputRef}
              type="text"
              placeholder="Enter Habit"
              onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
              <img className={styles.plus} src={Add} alt="add" />
            </button>
          </form>
          <ColorPicker selectColor={selectColor} />
        </section>
        <section className={styles.result}>
          <div className={styles.box}>
            <h2>{name}</h2>
          </div>
          <div className={styles.box} style={style}></div>
        </section>

        <button className={styles.addBtn} onClick={addHabit}>
          Add
        </button>
      </section>
    </div>
  );
};
export default HabitAddForm;

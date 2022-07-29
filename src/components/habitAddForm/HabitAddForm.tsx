import React, { useRef, useState } from "react";
import styles from "./habitAddForm.module.css";
import Close from "../../common/image/close.png";
import Add from "../../common/image/add.png";
//import ColorPicker from "../colorPicker/colorPicker";
const HabitAddForm = () => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState({});
  /*
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
    if (name === "") {
      alert("습관이름을 등록해주세요!");
      return;
    }
    if (color === "") {
      alert("색상을 등록해주세요!");
      return;
    }
    if (!isDuplicated(color)) {
      alert("색상이 중복되었습니다!");
      return;
    }
    closeModal();
    handleAdd(name, color);
  };
*/
  return (
    <div className={styles.container}>
      <section className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.title}>Add Habit</h2>
          <button>
            <img className={styles.close} src={Close} alt="close" />
          </button>
        </header>
        <section className={styles.body}>
          <h5 className={styles.habitName}>Habit Name</h5>
          <form className={styles.addForm}>
            <input
              className={styles.addInput}
              type="text"
              placeholder="Enter Habit"
            />
            <button>
              <img className={styles.plus} src={Add} alt="add" />
            </button>
          </form>
        </section>
        <section className={styles.result}>
          <div className={styles.box}>
            <h2>{name}</h2>
          </div>
          <div className={styles.box} style={style}></div>
        </section>

        <button className={styles.addBtn}>Add</button>
      </section>
    </div>
  );
};
export default HabitAddForm;

import React, { useRef, useState } from "react";
import { TwitterPicker } from "react-color";
import styles from "./colorPicker.module.css";
import Dots from "../../common/image/dots.png";

const ColorPicker = ({ selectColor }) => {
  const [color, setColor] = useState("#FB5266");
  const [isOpen, setIsOpen] = useState(false);

  const openPicker = () => {
    setIsOpen(!isOpen);
    selectColor(color);
  };
  const onChange = (color) => {
    setColor(color.hex);
  };
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Habit Color</h5>
      <ul className={styles.colors}>
        <li
          className={`${styles.circle} ${styles.red}`}
          onClick={() => selectColor("#FB5266")}
        ></li>
        <li
          className={`${styles.circle} ${styles.yellow}`}
          onClick={() => selectColor("#FED668")}
        ></li>
        <li
          className={`${styles.circle} ${styles.green}`}
          onClick={() => selectColor("#47CC80")}
        ></li>
        <li
          className={`${styles.circle} ${styles.purple}`}
          onClick={() => selectColor("#C2AAC5")}
        ></li>
        <li
          className={`${styles.circle} ${styles.random}`}
          onClick={openPicker}
        >
          <img className={styles.dots} src={Dots} alt="random" />
        </li>
      </ul>

      {isOpen && (
        <TwitterPicker
          color={color}
          onChangeComplete={onChange}
          onChangeComplete={openPicker}
        />
      )}
    </div>
  );
};

export default ColorPicker;

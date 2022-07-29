import React, { useRef, useState } from "react";
//import { TwitterPicker } from "react-color";
import styles from "./colorPicker.module.css";
import Dots from "../../common/image/dots.png";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [isOpen, setIsOpen] = useState(false);
  /*
  const openPicker = (color) => {
    setIsOpen(!isOpen);
    selectColor(color.hex);
  };
*/
  return <div className={styles.container}></div>;
};

export default ColorPicker;

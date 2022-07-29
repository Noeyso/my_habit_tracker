import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./CustomCheckbox.module.css";
const CustomCheckbox: React.FC<{ color: string; state: boolean }> = (props) => {
  const [isChecked, setIsChecked] = useState(props.state);

  const doHabit = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        style={{ background: !isChecked ? "#EDEDED" : props.color }}
        onChange={doHabit}
      />
    </div>
  );
};

export default CustomCheckbox;

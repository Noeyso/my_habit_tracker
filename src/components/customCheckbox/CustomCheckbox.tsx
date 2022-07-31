import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateHabit } from "../../modules/habit/actions";
import styles from "./CustomCheckbox.module.css";
const CustomCheckbox: React.FC<{
  color: string;
  state: boolean;
  index: number;
}> = (props) => {
  const isChecked = props.state;
  const dispatch = useDispatch();
  const changeHabitState = useCallback(
    (color: string, week: number, state: boolean) =>
      dispatch(updateHabit({ color: color, week: week, state: state })),
    [dispatch]
  );
  const doHabit = () => {
    changeHabitState(props.color, props.index - 1, !isChecked);
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

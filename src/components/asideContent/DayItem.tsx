import moment from "moment";
import React, { useCallback, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteHabit, updateHabit } from "../../modules/habit/actions";
import { HABIT_TYPE } from "../../modules/habit/types";
import HabitDeleteForm from "../form/habitDeleteForm/HabitDeleteForm";
import styles from "./DayItem.module.css";

const DayItem: React.FC<{ habit: HABIT_TYPE }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const today = moment();
  const week = today.day();
  const todayState = props.habit.weeks[week === 0 ? 6 : week - 1];
  const dispatch = useDispatch();
  const changeHabitState = useCallback(
    (color: string, week: number, state: boolean) =>
      dispatch(updateHabit({ color: color, week: week, state: state })),
    [dispatch]
  );
  const exceptHabit = useCallback(
    (color: string) => dispatch(deleteHabit({ color: color })),
    [dispatch]
  );

  const doHabit = () => {
    changeHabitState(props.habit.color, week === 0 ? 6 : week - 1, !todayState);
  };
  const dropHabit = () => {
    exceptHabit(props.habit.color);
    setIsOpen(false);
  };
  return (
    <section className={styles.container}>
      <div
        className={styles.colorbar}
        style={{ background: props.habit.color }}
      ></div>
      <div className={styles.content}>
        <div
          className={styles.bg_move}
          style={{
            width: !todayState ? 0 : "100%",
            background: props.habit.color,
            borderColor: props.habit.color,
          }}
        ></div>
        <div className={styles.content_body}>
          <div className={styles.content_top}>
            <span>{props.habit.name}</span>
            <div>
              <button onClick={() => setIsOpen(!isOpen)}>
                <FaTrash color={todayState ? "#ffffff" : "#000000"} />
              </button>
              {isOpen && <HabitDeleteForm deleteHabit={dropHabit} />}
            </div>
          </div>
          <div className={styles.content_bottom}>
            {todayState ? (
              <div className={styles.state_complete}>
                <span>
                  <BiCheck />
                  완료
                </span>
                <button className={styles.btn_undo} onClick={doHabit}>
                  취소
                </button>
              </div>
            ) : (
              <button className={styles.btn_complete} onClick={doHabit}>
                달성 완료!
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayItem;

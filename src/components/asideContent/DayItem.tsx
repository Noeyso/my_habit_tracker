import moment from "moment";
import React, { useCallback, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { DATA_TYPE } from "../../common/data/tableContents";
import { updateHabit } from "../../modules/habit/actions";
import styles from "./DayItem.module.css";

const DayItem: React.FC<{ habit: DATA_TYPE }> = (props) => {
  const today = moment();
  const week = today.day();
  const todayState = props.habit.weeks[week === 0 ? 6 : week - 1];
  const dispatch = useDispatch();
  const changeHabitState = useCallback(
    (color: string, week: number, state: boolean) =>
      dispatch(updateHabit({ color: color, week: week, state: state })),
    [dispatch]
  );
  const doHabit = () => {
    changeHabitState(props.habit.color, week === 0 ? 6 : week - 1, !todayState);
  };
  return (
    <section className={styles.day_item}>
      <div
        className={styles.colorbar}
        style={{ background: props.habit.color }}
      ></div>
      <div className={styles.day_item_detail} style={{}}>
        <div
          className={styles.bg_move}
          style={{
            width: !todayState ? 0 : "100%",
            background: props.habit.color,
          }}
        ></div>
        <div className={styles.day_item_detail}>
          <div className={styles.day_item_top}>
            <span>{props.habit.name}</span>
            <button>
              <BsThreeDotsVertical color="#ffffff" />
            </button>
          </div>
          <div className={styles.day_item_bottom}>
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

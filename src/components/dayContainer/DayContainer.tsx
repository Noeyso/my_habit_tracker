import React from "react";
import { mock_data } from "../../common/data/tableContents";
import styles from "./DayContainer.module.css";
import moment from "moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";
const DayContainer = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const today = moment();
  const [isDone, setIsDone] = useState(false);

  const completeHabit = () => {
    setIsDone(!isDone);
  };
  return (
    <aside className={styles.container}>
      <span className={styles.today}>
        {today.format("MM.DD")}
        {` ${weeks[today.day()]}요일`}
      </span>
      <section className={styles.box}>
        {mock_data.map((data) => {
          return (
            <section className={styles.day_item}>
              <div
                className={styles.colorbar}
                style={{ background: data.id }}
              ></div>
              <div className={styles.day_item_detail} style={{}}>
                <div
                  className={styles.bg_move}
                  style={{ width: !isDone ? 0 : "100%", background: data.id }}
                ></div>
                <div className={styles.day_item_detail}>
                  <div className={styles.day_item_top}>
                    <span>{data.habit}</span>
                    <button>
                      <BsThreeDotsVertical color="#ffffff" />
                    </button>
                  </div>
                  <div className={styles.day_item_bottom}>
                    {isDone ? (
                      <div className={styles.state_complete}>
                        <span>
                          <BiCheck />
                          완료
                        </span>
                        <button
                          className={styles.btn_undo}
                          onClick={completeHabit}
                        >
                          취소
                        </button>
                      </div>
                    ) : (
                      <button
                        className={styles.btn_complete}
                        onClick={completeHabit}
                      >
                        달성 완료!
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </aside>
  );
};

export default DayContainer;

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HabitAddForm.module.css";
import Close from "../../common/image/close.png";
import { useDispatch } from "react-redux";
import { DATA_TYPE } from "../../common/data/tableContents";
import { addHabit } from "../../modules/habit/actions";

const HabitAddForm: React.FC<{ closeForm: () => void }> = (props) => {
  const [color, setColor] = useState("#dedede");
  const [isShowMessage, setIsShowMessage] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const updateHabit = useCallback(
    (habit: DATA_TYPE) => dispatch(addHabit({ habit: habit })),
    [dispatch]
  );

  useEffect(() => {
    const initColor = makeRandomColor();
    setColor(initColor);
  }, []);
  const makeRandomColor = () => {
    return "#" + Math.round(Math.random() * 0xffffff).toString(16);
  };

  const resetColor = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newColor = makeRandomColor();
    setColor(newColor);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const habitName = inputRef.current!.value;
    if (habitName === "") {
      setIsShowMessage(true);
      return;
    }
    updateHabit({
      color: color,
      name: habitName,
      weeks: [false, false, false, false, false, false, false],
    });
    props.closeForm();
  };
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <header className={styles.header}>
          <h2 className={styles.title}>습관 추가</h2>
          <button>
            <img
              className={styles.close}
              src={Close}
              alt="close"
              onClick={props.closeForm}
            />
          </button>
        </header>

        <form className={styles.add_form} onSubmit={onSubmit}>
          <section className={styles.habit_name}>
            <h5>습관 이름</h5>

            <input type="text" placeholder="Enter Habit" ref={inputRef} />
          </section>

          <section className={styles.set_color}>
            <h5>색상 설정</h5>
            <div className={styles.controls}>
              <div
                className={styles.color_container}
                style={{ background: color }}
              >
                {color}
              </div>
              <button onClick={resetColor}>재설정</button>
            </div>
          </section>

          <button type="submit" className={styles.addBtn}>
            Add
          </button>
          {isShowMessage && <span>습관 이름을 설정해주세요!</span>}
        </form>
      </section>
    </div>
  );
};
export default HabitAddForm;

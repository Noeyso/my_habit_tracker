import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HabitAddForm.module.css";
import { useDispatch } from "react-redux";
import Form from "../Form";
import { addHabit } from "../../../modules/habit/actions";
import { HABIT_TYPE } from "../../../modules/habit/types";

const HabitAddForm: React.FC<{ closeForm: () => void }> = (props) => {
  const [color, setColor] = useState("");
  const [hexColor, setHexColor] = useState("");
  const [isShowMessage, setIsShowMessage] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const updateHabit = useCallback(
    (habit: HABIT_TYPE) => dispatch(addHabit({ habit: habit })),
    [dispatch]
  );

  useEffect(() => {
    const initColor = makeRandomColor();
    setColor(initColor);
  }, []);

  const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const makeRandomColor = () => {
    let h = rand(0, 360);
    let s = rand(0, 90);
    let l = rand(30, 65);
    let hsl = `hsl(${h},${s}%,${l}%)`;
    setHexColor(hslToHex(h, s, l));
    return hsl;
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
    <Form title="습관 추가">
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
              {hexColor}
            </div>
            <button onClick={resetColor}>재설정</button>
          </div>
        </section>
        <button type="submit" className={styles.add_btn}>
          추가하기
        </button>
        {isShowMessage && <span>습관 이름을 설정해주세요!</span>}
      </form>
    </Form>
  );
};
export default HabitAddForm;

//hsl to hex code
const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

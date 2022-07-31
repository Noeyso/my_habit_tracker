import { DATA_TYPE } from "../../common/data/tableContents";
import styles from "./DayContainer.module.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import DayItem from "./DayItem";
const DayContainer = () => {
  const habits: DATA_TYPE[] = useSelector(
    (state: RootState) => state.habit.habit
  );

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const today = moment();

  return (
    <aside className={styles.container}>
      <span className={styles.today}>
        {today.format("MM.DD")}
        {` ${weeks[today.day()]}요일`}
      </span>
      <section className={styles.box}>
        {habits.map((habit) => (
          <DayItem habit={habit} />
        ))}
      </section>
    </aside>
  );
};

export default DayContainer;

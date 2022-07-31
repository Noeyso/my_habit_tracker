import styles from "./Habits.module.css";
import HabitTable from "../habitTable/HabitTable";

const Habits = () => {
  return (
    <section className={styles.container}>
      <div className={styles.divider}></div>
      <HabitTable />
    </section>
  );
};
export default Habits;

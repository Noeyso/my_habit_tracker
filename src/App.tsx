import React, { useState } from "react";
import styles from "./app.module.css";
import DayContainer from "./components/asideContent/DayContainer";
import HabitAddForm from "./components/habitAddForm/HabitAddForm";
import Habits from "./components/habits/Habits";
import HabitStatus from "./components/habitStatus/HabitStatus";
import Header from "./components/header/Header";
const App = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const controlForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.dashboard}>
        <section className={styles.dashboard_main}>
          <HabitStatus isOpenForm={controlForm} />
          <Habits />
        </section>
        <DayContainer />
      </main>
      {isOpenForm && <HabitAddForm closeForm={controlForm} />}
    </div>
  );
};

export default App;

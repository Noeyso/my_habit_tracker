import React, { useState } from "react";
import styles from "./app.module.css";
import DayContainer from "./components/dayContainer/DayContainer";
import Habits from "./components/habits/Habits";
import HabitStatus from "./components/habitStatus/HabitStatus";
import Header from "./components/header/Header";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.dashboard}>
        <section className={styles.dashboard_main}>
          <HabitStatus />
          <Habits />
        </section>
        <DayContainer />
      </main>
    </div>
  );
};

export default App;

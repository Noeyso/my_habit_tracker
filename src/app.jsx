import React, { useState } from "react";
import Habits from "./components/habits/habits";
import Header from "./components/header/header";

const App = (props) => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", color: "#FB5266" },
    { id: 2, name: "Coding", color: "#FED668" },
    { id: 3, name: "Sleeping", color: "#C2AAC5" },
    { id: 4, name: "비타민 챙겨먹기", color: "#47CC80" },
  ]);
  const [count, setCount] = useState(habits.length);
  const [complete, setComplete] = useState(0);

  const handleAdd = (name, color) => {
    const new_habits = [...habits, { id: Date.now(), name, color }];
    setHabits(new_habits);
    setCount(habits.length);
  };

  const handleDelete = (habit) => {
    const new_habits = habits.filter((item) => item.id !== habit.id);
    setHabits(new_habits);
    setCount(new_habits.length);
  };

  const handleComplete = () => {
    setComplete(complete + 1);
  };
  return (
    <>
      <Header count={count} complete={complete} />
      <Habits
        habits={habits}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </>
  );
};

export default App;

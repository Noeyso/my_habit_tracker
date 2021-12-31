import React, { useState } from "react";
import Habits from "./components/habits/habits";
import Header from "./components/header/header";

const App = (props) => {
  const [habits, setHabits] = useState([
    { id: 1, name: "책읽기", color: "#FB5266", done: false },
    { id: 2, name: "코딩하기", color: "#FED668", done: false },
    { id: 3, name: "일찍 자기", color: "#C2AAC5", done: false },
    { id: 4, name: "비타민 챙겨먹기", color: "#47CC80", done: false },
  ]);
  const [count, setCount] = useState(habits.length);
  const [complete, setComplete] = useState(0);

  const handleAdd = (name, color) => {
    const new_habits = [...habits, { id: Date.now(), name, color }];
    setHabits(new_habits);
    setCount(new_habits.length);
  };

  const handleDelete = (habit) => {
    const new_habits = habits.filter((item) => item.id !== habit.id);
    setHabits(new_habits);
    setCount(new_habits.length);
    setComplete(complete - 1);
  };

  const handleComplete = (id) => {
    const new_habits = [...habits];
    new_habits.map((habit) => {
      if (habit.id === id) {
        habit["done"] = true;
      }
    });
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

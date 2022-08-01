import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type HABIT_TYPE = {
  color: string;
  name: string;
  weeks: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
};

export const init_data: HABIT_TYPE[] = [
  {
    color: "#8fd3f4",
    name: "윗몸일으키기 30개",
    weeks: [false, false, false, true, true, false, false],
  },
  {
    color: "#8ae2c4",
    name: "책읽기",
    weeks: [true, false, false, false, true, false, false],
  },
];

export type HabitAction = ActionType<typeof actions>;
export type Habit = {
  habit: HABIT_TYPE[];
};

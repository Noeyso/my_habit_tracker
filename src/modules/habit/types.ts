import { ActionType } from "typesafe-actions";
import { DATA_TYPE } from "../../common/data/tableContents";
import * as actions from "./actions";

export type HabitAction = ActionType<typeof actions>;
export type Habit = {
  habit: DATA_TYPE[];
};

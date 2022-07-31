import { deprecated } from "typesafe-actions";
import { DATA_TYPE } from "../../common/data/tableContents";

const { createStandardAction } = deprecated;

export const ADD_HABIT = "habit/ADD_HABIT";
export const DELETE_HABIT = "habit/DELETE_HABIT";
export const UPDATE_HABIT = "habit/UPDATE_HABIT";

export const addHabit = createStandardAction(ADD_HABIT)<{ habit: DATA_TYPE }>();
export const deleteHabit = createStandardAction(DELETE_HABIT)();
export const updateHabit = createStandardAction(UPDATE_HABIT)<{
  color: string;
  week: number;
  state: boolean;
}>();

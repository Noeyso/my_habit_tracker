import { mock_data } from "./../../common/data/tableContents";
import { HabitAction, Habit } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_HABIT, DELETE_HABIT, UPDATE_HABIT } from "./actions";
import produce from "immer";

const initialState: Habit = {
  habit: mock_data,
};

const habit = createReducer<Habit, HabitAction>(initialState, {
  [ADD_HABIT]: (state, action) =>
    produce(state, (draft) => {
      draft.habit.push(action.payload.habit);
    }),
  [DELETE_HABIT]: (state, action) =>
    produce(state, (draft) => {
      draft.habit.pop();
    }),
  [UPDATE_HABIT]: (state, action) =>
    produce(state, (draft) => {
      const index = draft.habit.findIndex(
        (habit) => habit.color === action.payload.color
      );
      draft.habit[index].weeks[action.payload.week] = action.payload.state;
    }),
});

export default habit;

import { combineReducers } from "redux";
import habit from "./habit/reducer";
import { Habit } from "./habit/types";

export type RootState = {
  habit: Habit;
};
const rootReducer = combineReducers({
  habit,
});

export default rootReducer;

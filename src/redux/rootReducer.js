import { combineReducers } from "redux";
import { todoReducer } from "./reducer";
export const rootreducer = combineReducers({
  todo: todoReducer,
});

import { ADD_TODO, DELETE_TODO, IS_COMPLETED } from "./actionType";

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: item,
});
export const deleteTodo = (item) => ({
  type: DELETE_TODO,
  payload: item,
});
export const isCompleted = (item) => ({
  type: IS_COMPLETED,
  payload: item,
});

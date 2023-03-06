import { ADD_TODO, DELETE_TODO, IS_COMPLETED } from "./actionType";
import { v4 } from "uuid";
const INITIAL_STATE = {
  todo: [],
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: addItem(state.todo, payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: deleteItem(state.todo, payload),
      };
    case IS_COMPLETED:
      return {
        ...state,
        todo: state.todo.map((todoItem) => isCompleted(todoItem, payload)),
      };
    default:
      return state;
  }
};

const addItem = (todo, payload) => {
  const text = payload;
  return [...todo, { id: v4(), text, isCompleted: false }];
};
const deleteItem = (todo, payload) => {
  return todo.filter((todo) => todo.id !== payload.id);
};
const isCompleted = (todo, payload) => {
  return todo.id === payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
};

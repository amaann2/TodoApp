import React from "react";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
const Todolist = ({ todos }) => {
  const incompleteTodo = todos.filter((todo) => !todo.isCompleted);
  const completedTodo = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3 className="center">Incompleted todo</h3>
      {incompleteTodo.map((todo, id) => (
        <TodoListItem todo={todo} key={id} />
      ))}
      <hr />
      <h3 className="center">completed todo</h3>
      {completedTodo.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todo.todo,
});

export default connect(mapStateToProps)(Todolist);

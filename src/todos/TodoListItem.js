import React from "react";
import { deleteTodo, isCompleted } from "../redux/action";
import "./TodoListItem.css";
import { connect } from "react-redux";
import { GiCancel } from "react-icons/gi";
import { BiCheckboxChecked } from "react-icons/bi";
import { BiCheckbox } from "react-icons/bi";

const TodoListItem = ({ todo, removetodo, iscomplete }) => {
  

  return (
    <div className="todo-item-container">
      {todo.isCompleted ? (
        <div className="todo-item">
          <del>{todo.text}</del>
        </div>
      ) : (
        <div className="todo-item">{todo.text}</div>
      )}

      <div className="bottons-container">
        <button className="completed-button" onClick={() => iscomplete(todo)}>
          {todo.isCompleted ? <BiCheckboxChecked /> : <BiCheckbox />}
        </button>
        <button className="remove-button" onClick={() => removetodo(todo)}>
          <GiCancel />
        </button>
      </div>
    </div>
  );
};
const mapDispatchToPops = (dispatch) => ({
  removetodo: (item) => dispatch(deleteTodo(item)),
  iscomplete: (item) => dispatch(isCompleted(item)),
});

export default connect(null, mapDispatchToPops)(TodoListItem);

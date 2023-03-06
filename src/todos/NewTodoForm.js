import React, { useState } from "react";
import { addTodo } from "../redux/action";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";
const NewTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        type="text"
        placeholder="Type your new tode here"
        className="new-todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          if (inputValue !== "") {
            addTodo(inputValue);
            setInputValue("");
          } else {
            alert("enter item");
          }
        }}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};
const mapDispatchToPops = (dispatch) => ({
  addTodo: (item) => dispatch(addTodo(item)),
});
export default connect(null, mapDispatchToPops)(NewTodoForm);

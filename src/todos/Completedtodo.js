import React from "react";
import { connect } from "react-redux";
const Completedtodo = ({ todo }) => {
  return <div>{todo.text}</div>;
};


export default (Completedtodo);

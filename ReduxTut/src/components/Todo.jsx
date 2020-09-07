import React from "react";
import { toggleTodo } from "../store/actions";
import { connect } from "react-redux";

const Todo = ({ todo, toggleTodo }) => (
  <li
    className="todo-item"
    style={{ cursor: "pointer" }}
    onClick={() => toggleTodo(todo.id)}
  >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span className="">{todo.content}</span>
  </li>
);

export default connect(null, { toggleTodo })(Todo);

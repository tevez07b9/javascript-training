import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../store/selectors";

const TodoList = ({ todos }) => {
  return (
    <div className="has-text-centered mt-4">
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo, index) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
          : "No todos, yay!"}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const todos = getTodosByVisibilityFilter(state, state.visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);

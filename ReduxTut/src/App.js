import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="container">
        <h1 className="mt-4 has-text-centered	 title is-1">Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </div>
  );
};

export default App;

import React from "react";

const ListKeys = () => {
  const todos = ["Get some milk 🐮", "Buy Coffee ☕️", "Exercise 🚴"];

  return (
    <div>
      <h1 className="title">Lists and Keys</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListKeys;

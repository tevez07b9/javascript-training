import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import "./App.css";
import Board from "./components/board";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="container">
        <h1 className=" has-text-centered	 title is-1" style={{ marginTop: 0 }}>
          Snake Game 🐍
        </h1>
        <Board />
      </div>
    </div>
  );
};

export default App;

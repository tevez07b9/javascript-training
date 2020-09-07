import React, { useContext, useState } from "react";
import { themes } from "./themeContext";
import ThemeContext, { ThemeProvider } from "./ThemeProvider";

import "../../../node_modules/bulma/css/bulma.min.css";

class ThemeContent extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const { theme, setTheme } = this.context;
    return (
      <div
        className="container"
        style={{
          padding: "20px 30px",
          background: theme.background,
          color: theme.foreground,
        }}
      >
        <h1 style={{ color: theme.foreground }} className="subtitle is-3">
          Using Theme Context
        </h1>
        <div className="control">
          <label className="radio">
            <input
              onClick={(e) => setTheme(e.target.value)}
              type="radio"
              name="answer"
              value="light"
            />
            Light
          </label>
          <label className="radio">
            <input
              type="radio"
              onClick={(e) => setTheme(e.target.value)}
              value="dark"
              name="answer"
            />
            Dark
          </label>
        </div>
      </div>
    );
  }
}

class Context extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Context</h1>
        <ThemeProvider>
          <ThemeContent />
        </ThemeProvider>
      </div>
    );
    return;
  }
}

export default Context;

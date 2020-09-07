import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

import App from "../App";

const AppLayout = () => {
  return (
    <div className="app_layout">
      <div className="main">
        <App />
      </div>
      <div className="sidebar">
        <h1 style={{ fontSize: "40px", fontWeight: 700 }}>Contents</h1>
        <Link className="link" to="/">
          Component Props
        </Link>
        <Link className="link" to="/state-lifecycle">
          State Lifecycle
        </Link>
        <Link className="link" to="/handling-events">
          Handling Events
        </Link>
        <Link className="link" to="/list-keys">
          List Keys
        </Link>
        <Link className="link" to="/forms">
          Froms
        </Link>
        <Link className="link" to="/lifting-state">
          Lifting State
        </Link>
        <Link className="link" to="/composition">
          Composition
        </Link>
        <Link className="link" to="/accessibility">
          Accessibility
        </Link>
        <Link className="link" to="/react-context">
          Context
        </Link>
        <Link className="link" to="/error-boundaries">
          Error Boundaries
        </Link>
        <Link className="link" to="/without-jsx">
          Without JSX
        </Link>
        <Link className="link" to="/fragments">
          Fragments
        </Link>
        <Link className="link" to="/code-splitting">
          Code Splitting
        </Link>
        <Link className="link" to="/uncontrolled-components">
          Uncontrolled Components
        </Link>
      </div>
    </div>
  );
};

export default AppLayout;

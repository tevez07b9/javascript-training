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
        <Link className="link" to="/prop-types">
          PropTypes
        </Link>
        <Link className="link" to="/strict-mode">
          React Strict Mode
        </Link>
        <Link className="link" to="/use-state">
          Use State Hook
        </Link>
        <Link className="link" to="/use-effect">
          Use Effect Hook
        </Link>
        <Link className="link" to="/domrefs">
          Refs and the DOM
        </Link>
        <Link className="link" to="/forward-refs">
          Forwarding Refs
        </Link>
        <Link className="link" to="/higherOrder-components">
          HigherOrderComponents
        </Link>
        <Link className="link" to="/reconciliation">
          Reconciliation
        </Link>
        <Link className="link" to="/webcomponents">
          Web Components
        </Link>
        <Link className="link" to="/synthetic-events">
          Synthetic Events
        </Link>
      </div>
    </div>
  );
};

export default AppLayout;

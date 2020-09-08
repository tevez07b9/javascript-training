import React, { useState, useEffect } from "react";
import "../../../node_modules/bulma/css/bulma.min.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className="container">
        <div className="field has-addons" style={{ justifyContent: "center" }}>
          <div className="control">
            <input
              className="input"
              ref={this.textInput}
              type="text"
              placeholder="Text Input..."
            />
          </div>
          <div className="control">
            <input
              type="button"
              value="Focus the text input"
              class="button is-link"
              onClick={this.focusTextInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

const DOMRefs = () => {
  return (
    <div>
      <h1 className="title">Refs and the DOM</h1>
      <MyComponent />
    </div>
  );
};

export default DOMRefs;

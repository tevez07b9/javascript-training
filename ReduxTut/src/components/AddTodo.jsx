import React, { Component } from "react";
import { addTodo } from "../store/actions";
import { connect } from "react-redux";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
    // alert(`Adding Todo...${this.state.input}`);
  };

  render() {
    return (
      <div className="has-text-centered">
        <div style={{ display: "inline-block" }}>
          <div className="field has-addons" style={{ width: "300px" }}>
            <div className="control" style={{ flex: "1" }}>
              <input
                className="input"
                onChange={(e) => this.updateInput(e.target.value)}
                type="text"
                placeholder="Add Todo..."
              />
            </div>
            <div className="control">
              <a onClick={this.handleAddTodo} className="button is-info">
                Add
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);

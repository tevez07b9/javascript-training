import React from "react";
import "../../../node_modules/bulma/css/bulma.min.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="" className="label">
            Name
          </label>
          <div className="control">
            <input className="input" type="text" ref={this.input} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

const UncontrolledComponents = () => {
  return (
    <div>
      <h1 className="title">Uncontrolled Components</h1>
      <div style={{ padding: "20px 30px", textAlign: "left" }}>
        <NameForm />
      </div>
    </div>
  );
};

export default UncontrolledComponents;

import React from "react";
import "../../../node_modules/bulma/css/bulma.min.css";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    alert("Form was submitted");
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1 className="title">Forms</h1>
        <div style={{ padding: "30px", textAlign: "left" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="" className="label">
                Name
              </label>
              <div className="control">
                <input
                  onChange={this.handleChange}
                  value={this.state.name}
                  type="text"
                  placeholder="Text Input"
                  name="name"
                  id=""
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Message
              </label>
              <div className="control">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.message}
                  placeholder="Enter Message..."
                  name="message"
                  id=""
                  className="textarea"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Gender
              </label>
              <div className="control">
                <div className="select">
                  <select
                    onChange={this.handleChange}
                    value={this.state.gender}
                    name="gender"
                  >
                    <option>Select dropdown</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label htmlFor="" className="radio">
                  <input
                    onChange={this.handleChange}
                    type="radio"
                    checked={this.state.question == "yes" ? true : false}
                    name="question"
                    value="yes"
                    id=""
                  />
                  Yes
                </label>
                <label htmlFor="" className="radio">
                  <input
                    onChange={this.handleChange}
                    type="radio"
                    value="no"
                    checked={this.state.question == "no" ? true : false}
                    name="question"
                    id=""
                  />
                  No
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>App State</h3>
          {Object.keys(this.state).map((key, index) => (
            <li key={index}>
              {key}:{this.state[key]}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;

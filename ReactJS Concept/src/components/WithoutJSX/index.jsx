import React from "react";

class Hello extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.toWhat}`);
  }
}

const WithoutJSX = () => {
  return (
    <div>
      <h1 className="title">React Without JSX</h1>
      <Hello toWhat="Talmeez Ahmed, rendered without JSX" />
    </div>
  );
};

export default WithoutJSX;

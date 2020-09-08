import React from "react";

const grayBox = {
  color: "#000000",
  backgroundColor: "#e6e6e6",
  padding: "20px",
  marginTop: "10px",
  borderRadius: "10px",
};

const Reconciliation = () => {
  return (
    <div>
      <h1 className="title">Reconciliation</h1>
      <p>React's Diffing Algorithm</p>
      <div className="container">
        <div style={grayBox}>
          <div style={{ display: "block" }}>
            <button class="button is-link">Link</button>
            <button class="button is-warning">Warning</button>
          </div>
          <p>Here both are same elements but with different properties</p>
        </div>
        <div style={grayBox}>
          <div class="columns">
            <div className="column">
              <ul>
                <li>first</li>
                <li>second</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
              </ul>
            </div>
          </div>
          <p>Here react only adds `third` to the list</p>
        </div>
      </div>
    </div>
  );
};

export default Reconciliation;

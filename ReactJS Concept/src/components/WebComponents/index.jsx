import React from "react";

const grayBox = {
  color: "#000000",
  backgroundColor: "#e6e6e6",
  padding: "20px",
  marginTop: "10px",
  borderRadius: "10px",
};

const WebComponents = () => {
  return (
    <div>
      <h1 className="title">Web Components</h1>
      <div className="container">
        <div style={grayBox}>
          <p>inside x-search</p>
          Hello <x-search>Talmeez Ahmed</x-search>!
        </div>
        <div style={grayBox}>
          <p>using brick-flipbox</p>
          <brick-flipbox class="demo">
            <div>front</div>
            <div>back</div>
          </brick-flipbox>
        </div>
      </div>
    </div>
  );
};

export default WebComponents;

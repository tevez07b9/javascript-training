import React, { useState } from "react";

const HandlingEvents = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <div>
      <h1 className="title">Handling Events</h1>
      <button onClick={handleClick}>Toggle</button>
      {isToggleOn ? (
        <p style={{ marginTop: "10px" }}>Lights On 🌞</p>
      ) : (
        <p style={{ marginTop: "10px" }}>Lights Off 🌚</p>
      )}
    </div>
  );
};

export default HandlingEvents;

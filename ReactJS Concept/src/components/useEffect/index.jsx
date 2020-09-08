import React, { useState, useEffect } from "react";
import "../../../node_modules/bulma/css/bulma.min.css";

const useEffectHook = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert(`Component Rerendered!, you clicked ${counter}`);
  });

  return (
    <div>
      <h1 className="title">Use Effect Hook</h1>
      <button class="button is-link" onClick={() => setCounter(counter + 1)}>
        Click Me!
      </button>
      <p className="subtitle is-3">You Clicked: {counter} times</p>
    </div>
  );
};

export default useEffectHook;

import React, { useState } from "react";
import "../../../node_modules/bulma/css/bulma.min.css";

const useStateHook = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="title">Use State Hook</h1>
      <button class="button is-link" onClick={() => setCounter(counter + 1)}>
        Click Me!
      </button>
      <p className="subtitle is-3">You Clicked: {counter} times</p>
    </div>
  );
};

export default useStateHook;

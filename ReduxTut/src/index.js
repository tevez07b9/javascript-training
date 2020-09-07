import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { addTodo } from "./store/actions";
import { Provider } from "react-redux";

import App from "./App";

// console.log(store.getState());
// store.dispatch(addTodo("Testing Todo"));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

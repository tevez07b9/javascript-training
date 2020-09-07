import React from "react";
import { Route, Switch } from "react-router-dom";
import CompProps from "./components/CompProps/CompProps";
import StateLifecycle from "./components/StateLifecycle";
import HandlingEvents from "./components/HandlingEvents";
import ListKeys from "./components/ListKeys";
import Forms from "./components/Forms";
import LifitingState from "./components/LiftingState";
import Composition from "./components/Composition";
import Accessibility from "./components/Accessibility";
import ErrorBoundaries from "./components/ErrorBoundaries";
import WithoutJSX from "./components/WithoutJSX";
import Fragments from "./components/Fragments";
import CodeSplitting from "./components/CodeSplitting";
import UncontrolledComponents from "./components/UncontrolledComponents";
import Context from "./components/Context";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CompProps} />
        <Route exact path="/state-lifecycle" component={StateLifecycle} />
        <Route exact path="/handling-events" component={HandlingEvents} />
        <Route exact path="/list-keys" component={ListKeys} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/lifting-state" component={LifitingState} />
        <Route exact path="/composition" component={Composition} />
        <Route exact path="/accessibility" component={Accessibility} />
        <Route exact path="/error-boundaries" component={ErrorBoundaries} />
        <Route exact path="/react-context" component={Context} />
        <Route exact path="/without-jsx" component={WithoutJSX} />
        <Route exact path="/fragments" component={Fragments} />
        <Route exact path="/code-splitting" component={CodeSplitting} />
        <Route
          exact
          path="/uncontrolled-components"
          component={UncontrolledComponents}
        />
      </Switch>
    </div>
  );
}

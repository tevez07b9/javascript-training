import React from "react";
import { Difficulty } from "../Difficulty";
import { Timer } from "../Timer";
import { Numbers } from "../Numbers";
import { Action } from "../Action";
import { Mode } from "../Mode";

/**
 * React component for the Status Section.
 */
export const StatusSection = (props) => {
  return (
    <section className="status">
      <Difficulty onChange={props.onChange} />
      <Timer />
      <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
      <div className="status__actions"></div>
    </section>
  );
};

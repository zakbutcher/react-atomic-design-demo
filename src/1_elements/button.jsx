import React from "react";
import { getClassName } from "../_utils";

export const Button = props => (
  <button className={getClassName(props)}>{props.chilren}</button>
);

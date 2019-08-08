import React from "react";
import "./styles.css";
import { getClassName } from "../_utils";

export const Padding = {
  NONE: "",
  SMALL: "padding-sm",
  MEDIUM: "padding-md",
  LARGE: "padding-lg",
  HAMBURGER: "padding-hamburger",
  HOT_DOG: "padding-hot-dog"
};

export const Shadow = {
  BOTTOM: "bottom-shadow"
};

export const FlexBehavior = {
  DEFAULT: "flex-default",
  GROW: "flex-grow",
  SHRINK: "flex-shrink",
  STAY: "flex-stay"
};

export const FlexWrap = {
  NO_WRAP: "flex-no-wrap",
  WRAP: "flex-wrap"
};

export const AlignItems = {
  CENTER: "align-center",
  STRETCH: "align-stretch",
  START: "align-start"
};

export const JustifyContent = {
  CENTER: "justify-center"
};

export const BgColor = {
  LIGHT_GREY: "bg-color-light-grey",
  MEDIUM_GREY: "bg-color-medium-grey"
};

export const FontScaling = {
  SMALL: "small-scaling",
  NORMAL: "normal-scaling",
  LARGE: "large-scaling"
};

const Row = props => (
  <div className={`flex row ${getClassName(props)}`}>{props.children}</div>
);
Row.defaultProps = {
  padding: Padding.DEFAULT,
  flex: FlexBehavior.DEFAULT,
  alignItems: AlignItems.CENTER,
  scaling: FontScaling.SMALL
};

const Column = props => (
  <div className={`flex column ${getClassName(props)}`}>{props.children}</div>
);
Column.defaultProps = {
  padding: Padding.DEFAULT,
  flex: FlexBehavior.DEFAULT,
  scaling: FontScaling.SMALL
};

export const SpacerSize = {
  SMALL: "spacer-sm",
  MEDIUM: "spacer-md",
  LARGE: "spacer-lg"
};

const Spacer = props => {
  const spacerClass = props.size || "flex-grow";
  const lineBreakClass = props.canBreakLine ? "line-break-spacer" : "";
  return (
    <div className={`flex ${spacerClass} ${lineBreakClass}`}>
      {props.children}
    </div>
  );
};
Spacer.defaultProps = {
  size: undefined
};

export const Flex = {
  Row,
  Column,
  Spacer
};

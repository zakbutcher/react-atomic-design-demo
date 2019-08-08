import React from "react";
import { getClassName } from "../_utils";

export const FontWeight = {
  NORMAL: "normal-weight",
  BOLD: "bold-weight"
};

export const FontColor = {
  BLACK: "black-font",
  GREY: "grey-font",
  WHITE: "white-font"
};

const Title = props => (
  <h1 className={getClassName(props)}>{props.children}</h1>
);
Title.defaultProps = {
  color: FontColor.BLACK,
  weight: FontWeight.NORMAL
};

const Heading = props => (
  <h2 className={getClassName(props)}>{props.children}</h2>
);
Heading.defaultProps = {
  color: FontColor.BLACK,
  weight: FontWeight.NORMAL
};

const SubHeading = props => (
  <h3 className={getClassName(props)}>{props.children}</h3>
);
SubHeading.defaultProps = {
  color: FontColor.BLACK,
  weight: FontWeight.NORMAL
};

const Body = props => <p className={getClassName(props)}>{props.children}</p>;
Body.defaultProps = {
  color: FontColor.BLACK,
  weight: FontWeight.NORMAL
};

const Description = props => (
  <p className={`description ${getClassName(props)}`}>{props.children}</p>
);
Description.defaultProps = {
  color: FontColor.GREY,
  weight: FontWeight.NORMAL
};

export const Fonts = {
  Title,
  Heading,
  SubHeading,
  Body,
  Description
};

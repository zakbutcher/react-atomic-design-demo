import React from "react";
import "./styles.css";
import { Fonts, FontColor } from "./fonts";

const AvatarColor = {
  DEFAULT: "avatar-bg-color-default",
  RED: "avatar-bg-color-red",
  BLUE: "avatar-bg-color-blue",
  GREEN: "avatar-bg-color-green",
  PURPLE: "avatar-bg-color-purple"
};

export const Avatar = props => (
  <div className={`avatar-circle ${props.color}`}>
    <Fonts.Body color={FontColor.WHITE}>{props.children}</Fonts.Body>
  </div>
);
Avatar.defaultProps = {
  color: AvatarColor.DEFAULT
};

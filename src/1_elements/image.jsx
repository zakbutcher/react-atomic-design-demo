import React from "react";

export const Image = props => (
  <div
    {...props}
    className="image"
    style={{
      backgroundImage: `url(${props.src})`
    }}
  />
);

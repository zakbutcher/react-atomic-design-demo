import React from "react";
import {
  Flex,
  AlignItems,
  JustifyContent,
  Padding,
  FlexBehavior,
  SpacerSize
} from "../5_layouts";
import { Fonts } from "../1_elements";

export const WithLabel = props => (
  <Flex.Column
    alignItems={AlignItems.CENTER}
    justifyContent={JustifyContent.CENTER}
    padding={Padding.HAMBURGER}
    flex={FlexBehavior.STAY}
  >
    {props.children}
    <Flex.Spacer size={SpacerSize.SMALL} />
    <Fonts.Description>{props.label}</Fonts.Description>
  </Flex.Column>
);

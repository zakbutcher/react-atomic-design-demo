import React from "react";
import { FlexBehavior, Flex, BgColor, Padding, SpacerSize } from "../5_layouts";
import {
  Home,
  Fire,
  Subscriptions,
  Youtube,
  Colors,
  Folder
} from "../1_elements";
import { WithLabel } from "../2_compounds";

export const LeftNav = props => (
  <Flex.Column
    flex={FlexBehavior.SHRINK}
    backgroundColor={BgColor.MEDIUM_GREY}
    padding={Padding.SMALL}
  >
    <WithLabel label="Home">
      <Home color={Colors.DARK_GREY} />
    </WithLabel>
    <Flex.Spacer size={SpacerSize.LARGE} />
    <WithLabel label="Trending">
      <Fire color={Colors.DARK_GREY} />
    </WithLabel>
    <Flex.Spacer size={SpacerSize.LARGE} />
    <WithLabel label="Subscriptions">
      <Subscriptions color={Colors.DARK_GREY} />
    </WithLabel>
    <Flex.Spacer size={SpacerSize.LARGE} />
    <WithLabel label="Originals">
      <Youtube color={Colors.DARK_GREY} />
    </WithLabel>
    <Flex.Spacer size={SpacerSize.LARGE} />
    <WithLabel label="Library">
      <Folder color={Colors.DARK_GREY} />
    </WithLabel>
  </Flex.Column>
);

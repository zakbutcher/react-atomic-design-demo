import React from "react";
import { Flex, FlexBehavior, SpacerSize, Padding, Shadow } from "../5_layouts";
import {
  Menu,
  Youtube,
  Colors,
  Fonts,
  Comment,
  Search,
  Video,
  Grid,
  Bell,
  FontWeight
} from "../1_elements";
import { Avatar } from "../1_elements/avatar";

const Row = Flex.Row;
const Spacer = Flex.Spacer;

export const Header = () => (
  <Row
    flex={FlexBehavior.SHRINK}
    padding={Padding.SMALL}
    shadow={Shadow.BOTTOM}
  >
    <Spacer size={SpacerSize.LARGE} />
    <Row flex={FlexBehavior.SHRINK}>
      <Menu />
      <Spacer size={SpacerSize.LARGE} />
      <Youtube color={Colors.RED} />
      <Spacer size={SpacerSize.SMALL} />
      <Fonts.Heading weight={FontWeight.BOLD}>Premium</Fonts.Heading>
    </Row>
    <Spacer />
    <Row>
      <input placeholder="Search" />
      <button>
        <Search />
      </button>
    </Row>
    <Spacer />
    <Row>
      <Video />
      <Spacer />
      <Grid />
      <Spacer />
      <Comment />
      <Spacer />
      <Bell />
      <Spacer />
      <Avatar>ZB</Avatar>
    </Row>
  </Row>
);

import React from "react";
import {
  Flex,
  FlexBehavior,
  Padding,
  SpacerSize,
  FontScaling,
  BgColor
} from "../5_layouts";
import { Image, Fonts, FontWeight, Pencil, FontColor } from "../1_elements";
import { Avatar } from "../1_elements/avatar";

const Column = Flex.Column;
const Row = Flex.Row;
const Spacer = Flex.Spacer;

export const WatchLaterSummary = () => (
  <Column
    flex={FlexBehavior.STAY}
    padding={Padding.MEDIUM}
    backgroundColor={BgColor.LIGHT_GREY}
  >
    <Row scale={FontScaling.LARGE} flex={FlexBehavior.SHRINK}>
      <Image />
    </Row>
    <Column flex={FlexBehavior.SHRINK} padding={Padding.HAMBURGER}>
      <Fonts.Title>Watch Later Playlist</Fonts.Title>
      <Spacer size={SpacerSize.SMALL} />
      <Fonts.SubHeading color={FontColor.GREY}>
        26 videos - Updated today
      </Fonts.SubHeading>
    </Column>
    <hr />
    <Row flex={FlexBehavior.SHRINK}>
      <Avatar>ZB</Avatar>
      <Spacer size={SpacerSize.SMALL} />
      <Fonts.Heading weight={FontWeight.BOLD}>Zak Butcher</Fonts.Heading>
      <Spacer />
      <Pencil />
      <Spacer size={SpacerSize.SMALL} />
      <Fonts.Heading>EDIT</Fonts.Heading>
    </Row>
  </Column>
);

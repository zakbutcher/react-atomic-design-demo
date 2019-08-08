import React from "react";
import { Flex, Padding, FlexBehavior, SpacerSize } from "../5_layouts";
import { Fonts, FontColor, Image, FontWeight } from "../1_elements";

const Column = Flex.Column;
const Row = Flex.Row;
const Spacer = Flex.Spacer;

export const VideoCard = props => {
  const { video, direction } = props;

  const isRow = direction === "row";
  const FlexWrapper = isRow ? Row : Column;

  return (
    <FlexWrapper className="wrapper" flex={FlexBehavior.GROW}>
      <Column flex={FlexBehavior.STAY}>
        <Image src={video.imgUrl} />
      </Column>
      <Column padding={isRow ? Padding.HOT_DOG : Padding.HAMBURGER}>
        <Fonts.Heading weight={FontWeight.BOLD}>{video.title}</Fonts.Heading>
        <Spacer size={SpacerSize.MEDIUM} />
        <Fonts.SubHeading color={FontColor.GREY}>
          {video.author}
        </Fonts.SubHeading>
        {!isRow && (
          <Fonts.SubHeading color={FontColor.GREY}>
            {video.views} - {video.uploaded}
          </Fonts.SubHeading>
        )}
      </Column>
    </FlexWrapper>
  );
};

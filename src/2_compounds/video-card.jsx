import React from 'react';
import { Flex, Padding, FlexBehavior, SpacerSize, FontScaling } from '../5_layouts';
import { Fonts, FontColor, Image, FontWeight } from '../1_elements';

const { Column, Row, Spacer, Fill } = Flex;

export const VideoCard = props => {
  const { video, direction } = props;

  const isRow = direction === 'row';
  const FlexWrapper = isRow ? Row : Column;

  return (
    <FlexWrapper
      className="wrapper"
      flex={FlexBehavior.GROW}
      scaling={props.imageScaling || FontScaling.NORMAL}
    >
      <Column flex={FlexBehavior.STAY}>
        <Image src={video.imgUrl} />
      </Column>
      <Fill.Column padding={Padding.SMALL} scaling={FontScaling.NORMAL}>
        <Fonts.Heading weight={FontWeight.BOLD}>{video.title}</Fonts.Heading>
        <Spacer size={SpacerSize.FILL_MEDIUM} />
        <Fonts.SubHeading color={FontColor.GREY}>{video.author}</Fonts.SubHeading>
        {!isRow && (
          <Fonts.SubHeading color={FontColor.GREY}>
            {video.views} - {video.uploaded}
          </Fonts.SubHeading>
        )}
      </Fill.Column>
    </FlexWrapper>
  );
};
VideoCard.defaultProps = {
  imageScaling: FontScaling.NORMAL,
};

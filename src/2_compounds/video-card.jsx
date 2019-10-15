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
      {/* todo */}
    </FlexWrapper>
  );
};
VideoCard.defaultProps = {
  imageScaling: FontScaling.NORMAL,
};

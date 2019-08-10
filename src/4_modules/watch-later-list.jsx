import React from 'react';
import { Flex, Padding, FlexBehavior, Inject, Hr } from '../5_layouts';
import { Fonts, FontColor } from '../1_elements';
import { VideoCard } from '../2_compounds';
import { videoList } from '../_utils';

const Column = Flex.Column;
const Row = Flex.Row;

export const WatchLaterList = () => (
  <Column padding={Padding.MEDIUM} scrollable>
    <Inject inject={<Hr />}>
      {videoList.map((video, index) => (
        <Row key={video.title} flex={FlexBehavior.SHRINK}>
          <Column padding={Padding.HOT_DOG} flex={FlexBehavior.SHRINK}>
            <Fonts.SubHeading color={FontColor.GREY}>{index + 1}</Fonts.SubHeading>
          </Column>
          <VideoCard video={video} direction="row" />
        </Row>
      ))}
    </Inject>
  </Column>
);

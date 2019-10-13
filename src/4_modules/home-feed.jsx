import React from 'react';
import {
  Flex,
  AlignItems,
  Padding,
  BgColor,
  SpacerSize,
  Inject,
  FlexWrap,
  Hr,
  FontScaling,
} from '../5_layouts';
import { Fonts, FontWeight } from '../1_elements';
import { videoList } from '../_utils';
import { VideoCard } from '../2_compounds';

const { Hamburger, Column, Spacer, ShrinkWrap } = Flex;

const VIDEOS_PER_ROW = 4;

export const HomeFeed = () => {
  const placeholderCount = 4 - (videoList.length % VIDEOS_PER_ROW);
  const placeholderArray = new Array(placeholderCount).fill('placeholder');
  const paddedVideoList = videoList.concat(placeholderArray);
  return (
    <Column padding={Padding.MEDIUM} backgroundColor={BgColor.LIGHT_GREY} scrollable>
      <Column>
        <ShrinkWrap.Row hamburger>
          <Fonts.Heading weight={FontWeight.BOLD}>
            From your subscriptions
          </Fonts.Heading>
          <Spacer />
          <Fonts.Heading>SEE ALL</Fonts.Heading>
        </ShrinkWrap.Row>
        <ShrinkWrap.Row hamburger scrollable>
          {videoList.map(video => (
            <React.Fragment key={video.title}>
              <VideoCard
                video={video}
                direction="column"
                imageScaling={FontScaling.LARGE}
              />
              <Spacer size={SpacerSize.FILL_SMALL} />
            </React.Fragment>
          ))}
        </ShrinkWrap.Row>
      </Column>
      <Hr />
      <Column>
        <ShrinkWrap.Row hamburger>
          <Fonts.Heading weight={FontWeight.BOLD}>Recommended</Fonts.Heading>
        </ShrinkWrap.Row>
        <Spacer size={SpacerSize.MEDIUM} />
        <Hamburger.Row alignItems={AlignItems.START} flexWrap={FlexWrap.WRAP}>
          <Inject inject={<Spacer size={SpacerSize.SMALL} canBreakLine />}>
            {paddedVideoList.map((video, index) =>
              video === 'placeholder' ? (
                <Column key={index} />
              ) : (
                <VideoCard key={video.title} video={video} direction="column" />
              ),
            )}
          </Inject>
        </Hamburger.Row>
      </Column>
    </Column>
  );
};

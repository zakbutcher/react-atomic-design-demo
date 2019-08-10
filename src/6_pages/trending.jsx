import React from 'react';
import { Flex, Padding, SpacerSize } from '../5_layouts';
import './styles.css';
import { Header, LeftNav } from '../4_modules';
import { Fonts, FontWeight } from '../1_elements';
import { videoList } from '../_utils';
import { VideoCard } from '../2_compounds';

const { Column, Spacer, ShrinkWrap, Fill } = Flex;

export const Trending = () => (
  <div className="full-page">
    <Header />
    <Fill.Row>
      <LeftNav />
      <Column padding={Padding.MEDIUM}>
        <ShrinkWrap.Row hamburger>
          <Fonts.Heading weight={FontWeight.BOLD}>
            From your subscriptions
          </Fonts.Heading>
          <Spacer />
          <Fonts.Heading>SEE ALL</Fonts.Heading>
        </ShrinkWrap.Row>
        <ShrinkWrap.Row scrollable>
          {videoList.map(video => (
            <React.Fragment key={video.title}>
              <VideoCard video={video} direction="column" />
              <Spacer size={SpacerSize.SMALL} />
            </React.Fragment>
          ))}
        </ShrinkWrap.Row>
      </Column>
    </Fill.Row>
  </div>
);

import React from "react";
import {
  Flex,
  AlignItems,
  Padding,
  BgColor,
  SpacerSize,
  Inject,
  FlexWrap
} from "../5_layouts";
import "./styles.css";
import { Header, LeftNav } from "../4_modules";
import { Fonts, FontWeight } from "../1_elements";
import { videoList } from "../_utils";
import { VideoCard } from "../2_compounds";

const Column = Flex.Column;
const Row = Flex.Row;
const Spacer = Flex.Spacer;

const VIDEOS_PER_ROW = 4;

export const Home = () => {
  const placeholderCount = 4 - (videoList.length % VIDEOS_PER_ROW);
  const placeholderArray = new Array(placeholderCount).fill("placeholder");
  const paddedVideoList = videoList.concat(placeholderArray);
  return (
    <div className="full-page">
      <Column>
        <Header />
        <Row alignItems={AlignItems.STRETCH}>
          <LeftNav />
          <Column padding={Padding.MEDIUM} backgroundColor={BgColor.LIGHT_GREY}>
            <Fonts.Heading weight={FontWeight.BOLD}>Recommended</Fonts.Heading>
            <Spacer size={SpacerSize.MEDIUM} />
            <Row alignItems={AlignItems.START} flexWrap={FlexWrap.WRAP}>
              <Inject inject={<Spacer size={SpacerSize.SMALL} canBreakLine />}>
                {paddedVideoList.map((video, index) =>
                  video === "placeholder" ? (
                    <Column key={index} />
                  ) : (
                    <VideoCard
                      key={video.title}
                      video={video}
                      direction="column"
                    />
                  )
                )}
              </Inject>
            </Row>
          </Column>
        </Row>
      </Column>
    </div>
  );
};

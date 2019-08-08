import React from "react";
import { Flex, AlignItems } from "../5_layouts";
import "./styles.css";
import {
  Header,
  LeftNav,
  WatchLaterSummary,
  WatchLaterList
} from "../4_modules";

const Column = Flex.Column;
const Row = Flex.Row;

export const WatchLater = () => (
  <div className="full-page">
    <Column>
      <Header />
      <Row alignItems={AlignItems.STRETCH}>
        <LeftNav />
        <WatchLaterSummary />
        <WatchLaterList />
      </Row>
    </Column>
  </div>
);

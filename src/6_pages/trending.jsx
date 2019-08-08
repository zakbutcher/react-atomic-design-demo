import React from "react";
import { Flex, AlignItems } from "../5_layouts";
import "./styles.css";
import { Header, LeftNav } from "../4_modules";

const Column = Flex.Column;
const Row = Flex.Row;

export const Trending = () => (
  <div className="full-page">
    <Column>
      <Header />
      <Row alignItems={AlignItems.STRETCH}>
        <LeftNav />
        List of Trending Videos
      </Row>
    </Column>
  </div>
);

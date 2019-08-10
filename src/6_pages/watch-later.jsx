import React from 'react';
import { Flex, AlignItems } from '../5_layouts';
import './styles.css';
import { Header, LeftNav, WatchLaterSummary, WatchLaterList } from '../4_modules';

const { Fill } = Flex;

export const WatchLater = () => (
  <div className="full-page">
    <Header />
    <Fill.Row alignItems={AlignItems.STRETCH}>
      <LeftNav />
      <WatchLaterSummary />
      <WatchLaterList />
    </Fill.Row>
  </div>
);

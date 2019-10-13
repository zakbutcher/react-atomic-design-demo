import React from 'react';
import { Flex } from '../5_layouts';
import './styles.css';
import { Header, LeftNav } from '../4_modules';
import { HomeFeed } from '../4_modules/home-feed';

const { Fill } = Flex;

export const Home = props => (
  <div className="full-page">
    <Header togglePage={props.togglePage} />
    <Fill.Row>
      <LeftNav />
      <HomeFeed />
    </Fill.Row>
  </div>
);

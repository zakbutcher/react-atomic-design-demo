import React from 'react';
import { Flex } from '../5_layouts';
import './styles.css';
import { Header, LeftNav } from '../4_modules';

const { Fill, Hamburger } = Flex;

export const Trending = props => (
  <div className="full-page">
    <Header togglePage={props.togglePage} />
    <Fill.Row>
      <LeftNav />
      <Hamburger.Row>TRENDING PAGE PLACEHOLDER</Hamburger.Row>
    </Fill.Row>
  </div>
);

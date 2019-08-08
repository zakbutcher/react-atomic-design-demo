import React from 'react';
import { GlobalStyle } from 'config/global-styles';
import App, { Container } from 'next/app';
import styled from 'styled-components';

const Footer = styled.div`
  height: 50px;
`;

/**
 * In order to use global styles in a statically-built application via `next build && next export`,
 * the `App` component needs to be overridden and `<GlobalStyle />` needs to be included within
 * the `<Container>{ ... }</Container>` body
 */
class AppWrapper extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default AppWrapper;

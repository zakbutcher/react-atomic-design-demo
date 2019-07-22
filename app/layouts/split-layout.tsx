import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import { Row, Column } from 'layouts';

export enum SplitWidth {
  DEFAULT = '0 0 300px',
}

interface ISplitLayoutProps extends IDefaultProps {
  /**
   * [required] Children should be an object that configures which components are injected into each
   * named slot
   */
  children: {
    leftPanel: JSX.Element;
    rightPanel: JSX.Element;
  };

  /**
   * [optional] Controls width of left panel of SplitLayout
   *
   * @default SplitWidth.DEFAULT
   */
  leftPanelWidth?: SplitWidth;
}

export const SplitLayout: FunctionComponent<ISplitLayoutProps> = props => {
  const { leftPanel, rightPanel } = props.children;

  return (
    <Row>
      <Column flex={props.leftPanelWidth || SplitWidth.DEFAULT}>{leftPanel}</Column>
      <Column flex="1 1 auto">{rightPanel}</Column>
    </Row>
  );
};

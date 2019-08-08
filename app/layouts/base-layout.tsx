import React, { FunctionComponent } from 'react';
import { PageTitle } from 'elements';
import { Column, FlexSpace } from 'layouts';

export interface IBaseLayoutProps {
  /**
   * [required] Children should be an object that configures which components are injected into each
   * named slot
   */
  children: {
    pageTitle: string;
    content: JSX.Element;
  };
}

export const BaseLayout: FunctionComponent<IBaseLayoutProps> = props => (
  <Column padding={FlexSpace.XLARGE}>
    <PageTitle>{props.children.pageTitle}</PageTitle>
    {props.children.content}
  </Column>
);

import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types';

const HrComponent = styled.hr`
  margin: 16px 0px;
  color: var(--black);
`;

export const HorizontalRule: SFC<IDefaultProps> = props => (
  <HrComponent className={props.className} />
);

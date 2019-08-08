import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types';

export const TableHeadComponent = styled.thead`
  padding: 4px;
  border: 1px solid black;
`;

interface ITableHeadProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to TableHead
   */
  children: any;
}

export const TableHead: SFC<ITableHeadProps> = props => (
  <TableHeadComponent className={props.className}>
    {props.children}
  </TableHeadComponent>
);

import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types';

const TableComponent = styled.table`
  margin: 16px auto;
  border: 2px solid var(--black);
  border-radius: 5px;
`;

interface ITableProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to Table
   */
  children: any;
}

export const Table: SFC<ITableProps> = props => (
  <TableComponent className={props.className}>{props.children}</TableComponent>
);

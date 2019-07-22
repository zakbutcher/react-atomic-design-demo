import React, { SFC } from 'react';
import { IDefaultProps } from 'types';

interface ITableRowProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to TableRow
   */
  children: any;
}

export const TableRow: SFC<ITableRowProps> = props => (
  <tr className={props.className}>{props.children}</tr>
);

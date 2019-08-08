import React, { SFC } from 'react';
import { IDefaultProps } from 'types';

interface ITableBodyProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to TableBody
   */
  children: any;
}

export const TableBody: SFC<ITableBodyProps> = props => (
  <tbody className={props.className}>{props.children}</tbody>
);

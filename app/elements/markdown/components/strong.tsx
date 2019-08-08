import React, { SFC } from 'react';
import { IDefaultProps } from 'types';

interface IStrongProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to Strong
   */
  children: any;
}

export const Strong: SFC<IStrongProps> = props => (
  <strong className={props.className}>{props.children}</strong>
);

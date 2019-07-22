import React, { SFC } from 'react';
import { IDefaultProps } from 'types';

interface ILinkProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to paragraph
   */
  children: any;

  /**
   * [optional] Url associated with link
   */
  href?: string;
}

export const Link: SFC<ILinkProps> = props => (
  <a {...props} target={props.href.includes('http') ? '_' : undefined}>
    {props.children}
  </a>
);

import { PrimaryText } from 'elements';
import React, { SFC } from 'react';
import { IDefaultProps } from 'types';

interface IParagraphProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to paragraph
   */
  children: any;
}

export const Paragraph: SFC<IParagraphProps> = props => (
  <PrimaryText className={props.className}>{props.children}</PrimaryText>
);

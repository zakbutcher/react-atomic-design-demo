import React, { SFC } from 'react';
import { IDefaultProps } from 'types';
import styled from 'styled-components';

const CodeBlock = styled.pre`
  margin: 16px 0;
  background-color: var(--black);
  color: var(--white);
  border-radius: 3px;
  padding: 16px;
`;

const InlineCode = styled.code`
  color: var(--secondary);
`;

interface ICodeProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Language code snippet is written in
   */
  language: string;

  /**
   * [optional] Always true (see above documentation)
   */
  inline?: boolean;

  /**
   * [optional] Prop used for block-style code
   */
  value?: string;
}

export const Code: SFC<ICodeProps> = props =>
  props.inline ? (
    <InlineCode className={props.className}>{props.children}</InlineCode>
  ) : (
    <CodeBlock className={props.className}>{props.value}</CodeBlock>
  );

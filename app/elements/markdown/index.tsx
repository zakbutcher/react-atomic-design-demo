import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Column } from 'layouts';
import { markdownRenderers } from './components';

interface IMarkdownProps {
  /**
   * [required] Content source to convert from markdown to React components
   */
  source: string;
}

export const Markdown: FunctionComponent<IMarkdownProps> = props => (
  <Column>
    <ReactMarkdown {...props} renderers={markdownRenderers} />
  </Column>
);

export * from './components';
export * from './interactive-markdown';

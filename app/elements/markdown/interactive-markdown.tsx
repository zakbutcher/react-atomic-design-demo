import React, { FunctionComponent, Fragment } from 'react';
import { Markdown } from 'elements';
import { Column, FlexSpace } from 'layouts';
import { IDefaultProps } from 'types';
import { isString } from 'utils';

export interface IInteractiveMarkdownProps extends IDefaultProps {
  /**
   * [required] Children must be an array of JSX Elements OR strings
   *
   * JSX Elements will be rendered dynamically and behave like regular
   * react components
   *
   * Strings will be passed to React Markdown and parsed accordingling
   */
  children: (JSX.Element | string)[];
}

export const InteractiveMarkdown: FunctionComponent<
  IInteractiveMarkdownProps
> = props => {
  return (
    <Column childSpacing={FlexSpace.MEDIUM}>
      {props.children.map((child, index) => (
        <Fragment key={index}>
          {isString(child) ? (
            <Markdown key={child.substr(0, 10)} source={child} />
          ) : (
            child
          )}
        </Fragment>
      ))}
    </Column>
  );
};

import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import { Row, Column, getChildKey } from 'layouts';

interface IMultiColumnProps extends IDefaultProps {
  /**
   * [required] Children should be an array of elements that should exist within evenly
   * sized columns
   */
  children: JSX.Element[] | string[];
}

export const MultiColumn: FunctionComponent<IMultiColumnProps> = props => {
  return (
    <Row>
      {React.Children.toArray(props.children).map((child: JSX.Element) => (
        <Column data-testid="column-wrapper" key={getChildKey(child)}>
          {child}
        </Column>
      ))}
    </Row>
  );
};

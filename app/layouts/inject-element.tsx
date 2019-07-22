import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import { getChildKey } from 'layouts';

interface IInjectElementProps extends IDefaultProps {
  /**
   * [required] Element to inject between each child passed to component
   */
  inject: JSX.Element;
  /**
   * [required] Chilrend must be an array of JSX Elements
   */
  children: JSX.Element[];
}

export const InjectElement: FunctionComponent<IInjectElementProps> = props => (
  <>
    {React.Children.toArray(props.children).map(
      (child: JSX.Element, index: number) =>
        index < props.children.length - 1 ? (
          <React.Fragment key={getChildKey(child)}>
            {child}
            {props.inject}
          </React.Fragment>
        ) : (
          child
        ),
    )}
  </>
);

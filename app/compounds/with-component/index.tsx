import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import { Column, Row, FlexPosition } from 'layouts';
import { PrimaryText, PrimaryButton } from 'elements';

interface IWithComponentProps extends IDefaultProps {
  /**
   * [required] Children should be the component to be rendered "with"
   * a pre-determined second component.
   *
   * For example, WithLabel combines a provided component with a label element:
   *
   *    <WithLabel position={WithPosition.LEFT} value="My Label">
   *      <Input {...inputProps } />
   *    </WithLabel>
   *
   *    will result in:
   *
   *    <Row>
   *      <Label>My Label</Label>
   *      <Input {...inputProps} />
   *    </Row>
   */
  children: JSX.Element | JSX.Element[];
  /**
   * [optional] Position of added component in relation to provided second element
   *
   * @default WithPosition.LEFT
   */
  position?: WithPosition;
}

export enum WithPosition {
  TOP = 1,
  RIGHT,
  BOTTOM,
  LEFT,
}

const getLayoutElementForPosition = (position: WithPosition) => {
  switch (position) {
    case WithPosition.TOP:
    case WithPosition.BOTTOM:
      return Column;
    case WithPosition.RIGHT:
    case WithPosition.LEFT:
    default:
      return Row;
  }
};

interface IRootWithComponentProps extends IWithComponentProps {
  /**
   * [required] Component to combine wit dev-defined component
   */
  withComponent: JSX.Element;
}

const WithComponent: FunctionComponent<IRootWithComponentProps> = props => {
  const position = props.position || WithPosition.LEFT;

  const LayoutElement = getLayoutElementForPosition(position);

  // If `position` is `TOP` or `LEFT`, Label must come first in child hierarchy
  if ([WithPosition.TOP, WithPosition.LEFT].includes(position)) {
    return (
      <LayoutElement alignItems={FlexPosition.CENTER}>
        {props.withComponent}
        {props.children}
      </LayoutElement>
    );
  }

  // If `position` is `BOTTOM` or `RIGHT`, Label must come first in child hierarchy
  return (
    <LayoutElement alignItems={FlexPosition.CENTER}>
      {props.children}
      {props.withComponent}
    </LayoutElement>
  );
};

interface IWithLabelProps extends IWithComponentProps {
  /**
   * [required] Value to show for Label
   */
  label: string;
}

export const WithLabel: FunctionComponent<IWithLabelProps> = props => (
  <WithComponent {...props} withComponent={<PrimaryText>{props.label}</PrimaryText>}>
    {props.children}
  </WithComponent>
);

interface IWithButtonProps extends IWithComponentProps {
  /**
   * [required] Value to show for Button
   */
  buttonText: string;
  /**
   * [required] Callback when user clicks on Button
   */
  onClick: () => void;
}

export const WithButton: FunctionComponent<IWithButtonProps> = props => (
  <WithComponent
    {...props}
    withComponent={
      <PrimaryButton onClick={props.onClick}>{props.buttonText}</PrimaryButton>
    }
  >
    {props.children}
  </WithComponent>
);

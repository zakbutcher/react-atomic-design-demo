import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import styled from 'styled-components';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export enum ButtonColor {
  BLUE = 'primary',
  ORANGE = 'secondary',
  GREEN = 'tertiary',
  WHITE = 'white',
  BLACK = 'black',
}

interface IButtonProps extends IDefaultProps {
  /**
   * [required] Children must be a string
   */
  children: string;
  /**
   * [required] Callback to trigger when user clicks on button
   */
  onClick: () => void;
  /**
   * [optional] Color of button
   *
   * @default ButtonColor.BLUE
   */
  color?: ButtonColor;
}

interface IBaseButtonProps extends IButtonProps {
  /**
   * [optional] Variant of button to use
   *
   * @default ButtonVariant.PRIMARY
   */
  variant?: ButtonVariant;
}

const BaseButton: FunctionComponent<IBaseButtonProps> = props => (
  <button data-testid="button" className={props.className} onClick={props.onClick}>
    {props.children}
  </button>
);

/**
 * @todo - Refactor how colors are used within application to support better accessibility
 * and possibly the ability to use tools like Polished's `lighten` or `darken` for better
 * hover & press effects with buttons
 */
const getBackgroundColor = (variant: ButtonVariant, color: ButtonColor) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return `
          background-color: var(--${color});
        `;
    case ButtonVariant.SECONDARY:
    case ButtonVariant.TERTIARY:
    default:
      return `
          background-color: transparent;
        `;
  }
};

const getBorderColor = (variant: ButtonVariant, color: ButtonColor) => {
  switch (variant) {
    case ButtonVariant.SECONDARY:
      return `
        border: 2px solid var(--${color});
      `;
    case ButtonVariant.PRIMARY:
    case ButtonVariant.TERTIARY:
    default:
      return `
        border: none
      `;
  }
};

const getFontColor = (variant: ButtonVariant, color: ButtonColor) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return color === ButtonColor.WHITE
        ? `color: var(--black);`
        : `color: var(--white);`;
    case ButtonVariant.SECONDARY:
    case ButtonVariant.TERTIARY:
    default:
      return `
        color: var(--${color});
      `;
  }
};

const getButtonCss = (props: IBaseButtonProps) => {
  const color = props.color || ButtonColor.BLUE;
  const variant = props.variant || ButtonVariant.PRIMARY;

  return `
    ${getBackgroundColor(variant, color)}
    ${getBorderColor(variant, color)}
    ${getFontColor(variant, color)}

    &:hover {
      cursor: pointer;
    }
  `;
};

const StyledBaseButton = styled(BaseButton)`
  ${props => getButtonCss(props)}
`;

export const PrimaryButton: FunctionComponent<IButtonProps> = props => (
  <StyledBaseButton {...props} variant={ButtonVariant.PRIMARY} />
);
export const SecondaryButton: FunctionComponent<IButtonProps> = props => (
  <StyledBaseButton {...props} variant={ButtonVariant.SECONDARY} />
);
export const TertiaryButton: FunctionComponent<IButtonProps> = props => (
  <StyledBaseButton {...props} variant={ButtonVariant.TERTIARY} />
);

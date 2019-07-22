import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types';
import { InjectElement } from './inject-element';
import { isString } from 'utils';

export * from './base-layout';
export * from './split-layout';
export * from './inject-element';
export * from './multi-column';

const FlexElement = styled.div`
  display: flex;
`;

export const Hr = styled.hr`
  border-top: 1px solid var(--black);
  border-style: solid;
`;

export enum FlexPosition {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
}

export enum FlexSpace {
  SMALL = '8px',
  MEDIUM = '16px',
  LARGE = '32px',
  XLARGE = '64px',
  HOTDOG = '0px 16px',
  HAMBURGER = '16px 0px',
}

export enum DropShadow {
  DEFAULT = '3px 3px 3px var(--black)',
  NONE = 'none',
}

export enum Border {
  NONE = 'none',
  PRIMARY_LEFT = 'box-shadow: -5px 0px 0px var(--primary)',
  SECONDARY_LEFT = 'box-shadow: -5px 0px 0px var(--secondary)',
  FULL = 'border: 1px solid var(--black)',
  BOTTOM = 'border-bottom: 1px solid var(--black)',
}

export enum BorderRadius {
  NONE = '0px',
  BASE = '5px',
  CIRCLE = '100%',
}

interface IFlexElementProps extends IDefaultProps {
  /**
   * [optional] Padding to be applied to flex element
   */
  padding?: FlexSpace;
  /**
   * [optional] How content should be justified within flex element
   */
  justifyContent?: FlexPosition;
  /**
   * [optional] How content should be justified within flex element
   */
  alignItems?: FlexPosition;
  /**
   * [optional] Specifies width of flex element
   */
  width?: string;
  /**
   * [optional] Specifies height of flex element
   */
  height?: string;
  /**
   * [optional] Specifies spacing to be applied between children.  Children will be spaced
   * horizontally for Rows and vertically for Columns
   */
  childSpacing?: FlexSpace;
  /**
   * [optional] Specifies flex behavior.  Expects the same values as the `flex` css property:
   *
   *    flex: {grow} {shrink} {basis};
   */
  flex?: string;
  /**
   * [optional] Specifies dropshadow to show on element
   *
   * @default DropShadow.NONE
   */
  dropshadow?: DropShadow;
  /**
   * [optional] Enables hover effects for element
   *
   * Hover Effects include:
   *    cursor: pointer;
   */
  enableHoverEffects?: boolean;
  /**
   * [optional] Specifies border style to apply
   *
   * @default Border.NONE
   */
  border?: Border;
  /**
   * [optional] Alternative border to show on hover
   */
  borderOnHover?: Border;
  /**
   * [optional] Specifies border radius to apply
   *
   * @default Border.NONE
   */
  borderRadius?: BorderRadius;
}

const getHoverEffects = (borderOnHover: Border) => `
  &:hover {
    cursor: pointer;

    ${borderOnHover};
  }
`;

const getFlexStyles = (props: IFlexElementProps) => `
  ${!!props.padding ? `padding: ${props.padding};` : ''}
  ${!!props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${!!props.alignItems ? `align-items: ${props.alignItems};` : ''}
  ${!!props.width ? `width: ${props.width};` : ''};
  ${!!props.height ? `height: ${props.height};` : ''};
  ${!!props.flex ? `flex: ${props.flex};` : ''};
`;

const getDesignStyles = (props: IFlexElementProps) => `
  ${!!props.dropshadow ? `box-shadow: ${props.dropshadow};` : ''};
  ${!!props.border ? props.border : ''};
  ${props.enableHoverEffects ? getHoverEffects(props.borderOnHover) : ''};
  border-radius: ${!!props.borderRadius ? props.borderRadius : BorderRadius.NONE};
`;

// #region Row Definition
const BaseRow: FunctionComponent<IFlexElementProps> = props => {
  if (!!props.childSpacing) {
    return (
      <FlexElement {...props}>
        <InjectElement inject={<Spacer width={props.childSpacing} />}>
          {props.children}
        </InjectElement>
      </FlexElement>
    );
  }
  return <FlexElement {...props} />;
};

export const Row = styled(BaseRow)<IFlexElementProps>`
  flex-direction: row;
  ${props => getFlexStyles(props)}
  ${props => getDesignStyles(props)}
`;
// #endregion Row Definition
// #region Column Definition
const BaseColumn: FunctionComponent<IFlexElementProps> = props => {
  if (!!props.childSpacing) {
    return (
      <FlexElement {...props}>
        <InjectElement inject={<Spacer height={props.childSpacing} />}>
          {props.children}
        </InjectElement>
      </FlexElement>
    );
  }
  return <FlexElement {...props} />;
};

export const Column = styled(BaseColumn)<IFlexElementProps>`
  flex-direction: column;
  ${props => getFlexStyles(props)}
  ${props => getDesignStyles(props)}
`;
// #endregion Column Definition

export interface ISpacerProps extends IDefaultProps {
  /**
   * [optional] Width spacer should take up
   */
  width?: string;
  /**
   * [optional] Height spacer should take up
   */
  height?: string;
  /**
   * [optional] Margin spacer should take up
   */
  margin?: string;
}

const getSpacerStyle = (props: ISpacerProps) => `
  ${!!props.width ? `width: ${props.width};` : ''}
  ${!!props.height ? `height: ${props.height};` : ''}
  ${!!props.margin ? `margin: ${props.margin};` : ''}
`;

export const Spacer = styled.div<ISpacerProps>`
  ${props => getSpacerStyle(props)}
`;

export const getChildKey = (child: JSX.Element | string) =>
  isString(child) ? child : child.key;

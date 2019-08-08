import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types';
import { FlexSpace } from 'layouts';
import { Color } from 'config/colors';

interface IBaseShapeProps extends IDefaultProps {
  /**
   * [optional] Background color for shape
   *
   * @default Color.BLACK
   */
  backgroundColor?: Color;
}

const BaseShape: FunctionComponent<IBaseShapeProps> = props => <div {...props} />;

interface ICircleProps extends IBaseShapeProps {
  /**
   * [optional] Size of circle (diameter)
   *
   * @default FlexSpace.MEDIUM
   */
  size?: FlexSpace;
}

export const Circle = styled(BaseShape)<ICircleProps>`
  border-radius: 100%;
  height: ${props => props.size || FlexSpace.MEDIUM};
  width: ${props => props.size || FlexSpace.MEDIUM};
  margin: 8px;
  background-color: ${props => props.backgroundColor || Color.BLACK};
`;

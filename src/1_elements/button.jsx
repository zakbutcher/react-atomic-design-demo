import React from 'react';
import './styles.css';
import { getClassName } from '../_utils';

export const Button = props => (
  <button className={getClassName(props)}>{props.children}</button>
);

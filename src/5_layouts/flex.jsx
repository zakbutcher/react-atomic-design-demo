import React from 'react';
import './styles.css';
import { getClassName } from '../_utils';

export const Padding = {
  NONE: '',
  SMALL: 'padding-sm',
  MEDIUM: 'padding-md',
  LARGE: 'padding-lg',
  HAMBURGER: 'padding-hamburger',
  HOT_DOG: 'padding-hot-dog',
};

export const Shadow = {
  BOTTOM: 'bottom-shadow',
};

export const FlexBehavior = {
  DEFAULT: 'flex-default',
  GROW: 'flex-grow',
  SHRINK: 'flex-shrink',
  STAY: 'flex-stay',
};

export const FlexWrap = {
  NO_WRAP: 'flex-no-wrap',
  WRAP: 'flex-wrap',
};

export const AlignItems = {
  CENTER: 'align-center',
  STRETCH: 'align-stretch',
  START: 'align-start',
};

export const JustifyContent = {
  CENTER: 'justify-center',
};

export const BgColor = {
  LIGHT_GREY: 'bg-color-light-grey',
  MEDIUM_GREY: 'bg-color-medium-grey',
};

export const FontScaling = {
  SMALL: 'small-scaling',
  NORMAL: 'normal-scaling',
  LARGE: 'large-scaling',
};

const Row = props => (
  <div
    className={`flex row ${props.scrollable ? 'scrollable' : ''} ${getClassName(
      props,
    )}`}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);
Row.defaultProps = {
  padding: Padding.NONE,
  flex: FlexBehavior.DEFAULT,
  alignItems: AlignItems.CENTER,
};

const Column = props => (
  <div
    className={`flex column ${props.scrollable ? 'scrollable' : ''} ${getClassName(
      props,
    )}`}
  >
    {props.children}
  </div>
);
Column.defaultProps = {
  padding: Padding.NONE,
  flex: FlexBehavior.DEFAULT,
};

// #region Sandwiches
const HamburgerRow = props => <Row {...props} padding={Padding.HAMBURGER} />;
const HamburgerColumn = props => <Column {...props} padding={Padding.HAMBURGER} />;

const Hamburger = {
  Row: HamburgerRow,
  Column: HamburgerColumn,
};

const HotDogRow = props => <Row {...props} padding={Padding.HOT_DOG} />;
const HotDogColumn = props => <Column {...props} padding={Padding.HOT_DOG} />;

// is a hot dog a sandwich though?
const HotDog = {
  Row: HotDogRow,
  Column: HotDogColumn,
};
// #endregion Sandwiches

// #region Home Supplies
const ShrinkWrapRow = props => {
  if (props.hamburger) {
    return <Hamburger.Row {...props} flex={FlexBehavior.SHRINK} />;
  } else if (props.hotDog) {
    return <Hamburger.Row {...props} flex={FlexBehavior.SHRINK} />;
  }
  return <Row {...props} flex={FlexBehavior.SHRINK} />;
};
const ShrinkWrapColumn = props => {
  if (props.hamburger) {
    return <Hamburger.Column {...props} flex={FlexBehavior.SHRINK} />;
  } else if (props.hotDog) {
    return <Hamburger.Column {...props} flex={FlexBehavior.SHRINK} />;
  }
  return <Column {...props} flex={FlexBehavior.SHRINK} />;
};

const ShrinkWrap = {
  Row: ShrinkWrapRow,
  Column: ShrinkWrapColumn,
};
// #endregion Home Supplies

// #region MS Paint
const fillProps = {
  flex: FlexBehavior.GROW,
  alignItems: AlignItems.STRETCH,
};

const FillRow = props => {
  if (props.hamburger) {
    return <Hamburger.Row {...props} {...fillProps} />;
  } else if (props.hotDog) {
    return <Hamburger.Row {...props} {...fillProps} />;
  }
  return <Row {...props} {...fillProps} />;
};
const FillColumn = props => {
  if (props.hamburger) {
    return <Hamburger.Column {...props} {...fillProps} />;
  } else if (props.hotDog) {
    return <Hamburger.Column {...props} {...fillProps} />;
  }
  return <Column {...props} {...fillProps} />;
};

const Fill = {
  Row: FillRow,
  Column: FillColumn,
};
// #endregion MS Paint

export const SpacerSize = {
  SMALL: 'spacer-sm',
  MEDIUM: 'spacer-md',
  LARGE: 'spacer-lg',
  FILL_SMALL: 'spacer-fill-sm',
  FILL_MEDIUM: 'spacer-fill-md',
};

const Spacer = props => {
  const spacerClass = props.size || 'flex-grow';
  const lineBreakClass = props.canBreakLine ? 'line-break-spacer' : '';
  return (
    <div className={`flex ${spacerClass} ${lineBreakClass}`}>{props.children}</div>
  );
};
Spacer.defaultProps = {
  size: undefined,
};

export const Flex = {
  Row,
  Column,
  Spacer,
  HotDog,
  Hamburger,
  ShrinkWrap,
  Fill,
};

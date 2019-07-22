import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { IDefaultProps } from 'types';
import { TogglesContext } from './reducer';
import { TogglesActions } from './actions';
import { isFunction } from 'utils';

interface IToggleChildrenFunctionProps {
  isActive: boolean;
  setActive: () => void;
}

export interface IToggleableComponentProps extends IDefaultProps {
  /**
   * [required] Children may be a function or a regular JSX Element.
   *
   * If Children is a function, it will be provided a boolean value indicating
   * whether the toggle is the currently active one
   */
  children:
    | string
    | JSX.Element
    | ((props: IToggleChildrenFunctionProps) => JSX.Element);
}

interface IToggleComponentProps extends IToggleableComponentProps {
  /**
   * [required] Name associated with toggle
   */
  toggleName: string;
}

const Select: FunctionComponent<IToggleComponentProps> = props => {
  const { state, dispatch } = useContext(TogglesContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    dispatch(TogglesActions.registerToggle(props.toggleName));
    setIsMounted(true);
  }, []);

  const setActiveToggle = () =>
    dispatch(TogglesActions.setActiveToggle([props.toggleName]));

  if (isMounted) {
    if (isFunction(props.children)) {
      return props.children({
        isActive: state.activeToggles.includes(props.toggleName),
        setActive: setActiveToggle,
      });
    }

    return <div onClick={setActiveToggle}>{props.children}</div>;
  }

  return <div />;
};

const Content: FunctionComponent<IToggleComponentProps> = props => {
  const { state } = useContext(TogglesContext);
  return state.activeToggles.includes(props.toggleName) && <>{props.children}</>;
};

export const Toggle = {
  Select,
  Content,
};

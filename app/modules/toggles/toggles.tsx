import React, { FunctionComponent, useReducer, useEffect } from 'react';
import { TogglesActions } from './actions';
import {
  TogglesContext,
  togglesReducer,
  ITogglesState,
  INITIAL_STATE,
  INITIAL_TOGGLE,
} from './reducer';
import { useLocalStorage } from 'hooks';
import { isString, isArrayOfType } from 'utils';

interface ITogglesProps {
  /**
   * [optional] Default toggle(s) to show.  If not provided, will default to first
   * child
   */
  defaultToggleName?: string | string[];
  /**
   * [optional] When true, default behavior is overridden for automatically selecting
   * the first child.  This is useful for things like Accoridions which may not need a default
   * one to be open
   */
  overrideDefault?: boolean;
  /**
   * [optional] Unique Key to identify component by.  Enables use of local
   * storage to maintain component state across page refreshes
   */
  toggleKey?: string;
  /**
   * [optional] Enables checkbox-like toggling for associated toggles.  Useful for elements
   * whose state is not reliant on the state of other grouped toggles.
   *
   * i.e. a group of accordions
   */
  disassociateToggles?: boolean;
}

export const Toggles: FunctionComponent<ITogglesProps> = props => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const shouldUseLocalStorage = isString(props.toggleKey);
  const getActiveToggle = (): string[] => {
    const activeToggles = !!props.defaultToggleName
      ? props.defaultToggleName
      : INITIAL_TOGGLE;
    if (shouldUseLocalStorage) {
      const { value } = getLocalStorage(props.toggleKey);
      return isArrayOfType<string>(value, isString)
        ? value
        : ([] as string[]).concat(activeToggles);
    }
    return ([] as string[]).concat(activeToggles);
  };

  const initialState: ITogglesState = {
    ...INITIAL_STATE,
    enableMultiToggle: props.disassociateToggles,
    activeToggles: getActiveToggle(),
  };

  const [state, dispatch] = useReducer(togglesReducer, initialState);

  useEffect(() => {
    if (
      !props.overrideDefault &&
      state.activeToggles.length === 0 &&
      state.toggles.length > 0
    ) {
      dispatch(TogglesActions.setActiveToggle([state.toggles[0]]));
    }
  });

  useEffect(() => {
    if (shouldUseLocalStorage) {
      setLocalStorage(props.toggleKey, state.activeToggles);
    }
  }, [state.activeToggles]);

  return (
    <TogglesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TogglesContext.Provider>
  );
};

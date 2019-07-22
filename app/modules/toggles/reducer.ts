import React from 'react';
import { TTogglesActions } from './actions';

export interface ITogglesState {
  activeToggles: string[];
  enableMultiToggle: boolean;
  toggles: string[];
}

export const INITIAL_TOGGLE: string[] = [];

export const INITIAL_STATE = {
  activeToggles: INITIAL_TOGGLE,
  enableMultiToggle: false,
  toggles: [] as string[],
};

export const TogglesContext = React.createContext({
  state: INITIAL_STATE,
  dispatch: null,
});

const mergeActiveToggles = (state: ITogglesState, newToggles: string[] = []) => {
  if (state.enableMultiToggle) {
    if (state.activeToggles.length === 0) {
      return newToggles;
    }
    const filteredActive = state.activeToggles.filter(
      toggle => !newToggles.includes(toggle),
    );
    const filteredNew = newToggles.filter(
      toggle => !state.activeToggles.includes(toggle),
    );
    return filteredActive.concat(filteredNew);
  }
  return newToggles;
};

export const togglesReducer = (
  state: ITogglesState = INITIAL_STATE,
  action: TTogglesActions,
) => {
  switch (action.type) {
    case 'SET_ACTIVE_TOGGLES':
      return {
        ...state,
        activeToggles: mergeActiveToggles(state, action.payload.activeToggles),
      };
    case 'REGISTER_TOGGLE':
      return {
        ...state,
        toggles: state.toggles.concat(action.payload.toggle),
      };
    case 'ENABLE_MULTI_TOGGLE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

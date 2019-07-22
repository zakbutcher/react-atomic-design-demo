import { IFSA } from 'types';

interface ISetActiveToggle extends IFSA {
  type: 'SET_ACTIVE_TOGGLES';
  payload: {
    activeToggles: string[];
  };
}

const setActiveToggle = (activeToggles: string[]): ISetActiveToggle => ({
  type: 'SET_ACTIVE_TOGGLES',
  payload: { activeToggles },
});

interface IRegisterToggle extends IFSA {
  type: 'REGISTER_TOGGLE';
  payload: {
    toggle: string;
  };
}

const registerToggle = (toggle: string): IRegisterToggle => ({
  type: 'REGISTER_TOGGLE',
  payload: { toggle },
});

interface IEnableMultiToggle extends IFSA {
  type: 'ENABLE_MULTI_TOGGLE';
  payload: {
    enableMultiToggle: boolean;
  };
}

const enableMultiToggle = (enableMultiToggle: boolean): IEnableMultiToggle => ({
  type: 'ENABLE_MULTI_TOGGLE',
  payload: { enableMultiToggle },
});

export const TogglesActions = {
  setActiveToggle,
  registerToggle,
  enableMultiToggle,
};

export type TTogglesActions =
  | ISetActiveToggle
  | IRegisterToggle
  | IEnableMultiToggle;

import React from 'react';
import { TFormActions } from './actions';

export interface IFormElementState {
  value: string;
  isValid: boolean;
}

export interface IFormState {
  [key: string]: IFormElementState;
}

export const INITIAL_FORM_ELEMENT_STATE = {
  value: '',
  isValid: false,
};
export const INITIAL_STATE = {};

export const FormContext = React.createContext<{
  state: IFormState;
  dispatch: (action: TFormActions) => void;
}>({
  state: INITIAL_STATE,
  dispatch: null,
});

export const formReducer = (
  state: IFormState = INITIAL_STATE,
  action: TFormActions,
) => {
  switch (action.type) {
    case 'REGISTER_FORM_ELEMENT':
      return {
        ...state,
        [action.payload.elementName]: INITIAL_FORM_ELEMENT_STATE,
      };
    case 'SET_FORM_ELEMENT_VALUE':
      return {
        ...state,
        [action.payload.elementName]: action.payload.elementState,
      };
    default:
      return state;
  }
};

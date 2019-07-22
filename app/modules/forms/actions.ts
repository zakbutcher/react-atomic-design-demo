import { IFSA } from 'types';
import { IFormElementState } from './reducer';

interface IRegisterFormElement extends IFSA {
  type: 'REGISTER_FORM_ELEMENT';
  payload: {
    elementName: string;
  };
}

const registerFormElement = (elementName: string): IRegisterFormElement => ({
  type: 'REGISTER_FORM_ELEMENT',
  payload: { elementName },
});

interface ISetFormElementValue extends IFSA {
  type: 'SET_FORM_ELEMENT_VALUE';
  payload: {
    elementName: string;
    elementState: IFormElementState;
  };
}

const setFormElementValue = (
  elementName: string,
  elementState: IFormElementState,
): ISetFormElementValue => ({
  type: 'SET_FORM_ELEMENT_VALUE',
  payload: {
    elementName,
    elementState,
  },
});

export const FormActions = {
  registerFormElement,
  setFormElementValue,
};

export type TFormActions = IRegisterFormElement | ISetFormElementValue;

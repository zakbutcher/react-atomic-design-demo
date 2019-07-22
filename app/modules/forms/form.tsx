import React, { FunctionComponent, useReducer, PureComponent } from 'react';
import { formReducer, INITIAL_STATE, FormContext, TextInput } from 'modules/forms';

export const FormGroup: FunctionComponent<{}> = props => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
};

export class Form extends PureComponent<{}> {
  static TextInput = TextInput;
  render(): null {
    return null;
  }
}

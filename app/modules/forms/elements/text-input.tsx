import React, { FunctionComponent, useContext, useEffect } from 'react';
import { ITextInputProps, TextInput as BaseTextInput } from 'elements';
import { FormContext, FormActions } from 'modules/forms';

interface IFormTextInput extends ITextInputProps {
  /**
   * [required] Unique identifier for text input within form
   */
  name: string;
}

export const TextInput: FunctionComponent<IFormTextInput> = ({ name, ...props }) => {
  const { dispatch } = useContext(FormContext);

  useEffect(() => {
    dispatch(FormActions.registerFormElement(name));
  }, []);

  return <BaseTextInput {...props} />;
};

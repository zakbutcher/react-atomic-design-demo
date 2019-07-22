import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';

export interface ITextInputProps extends IDefaultProps {
  /**
   * [required] Callback to fire when user updates input
   */
  onChange: (value: string) => void;
  /**
   * [required] Current value to render
   */
  value: string;
}

export const TextInput: FunctionComponent<ITextInputProps> = props => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    props.onChange(e.currentTarget.value);
  return <input {...props} type="text" onChange={onChange} />;
};

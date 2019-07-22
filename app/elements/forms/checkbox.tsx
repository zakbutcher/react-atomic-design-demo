import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';

interface ICheckboxProps extends IDefaultProps {
  /**
   * [required] Callback to fire when user updates input
   */
  onChange: (value: string) => void;
}

export const Checkbox: FunctionComponent<ICheckboxProps> = props => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    props.onChange(e.currentTarget.value);
  return <input {...props} type="checkbox" onChange={onChange} />;
};

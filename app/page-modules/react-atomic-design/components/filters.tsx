import React, { FunctionComponent, useEffect, useContext } from 'react';
import { IDefaultProps } from 'types';
import { Column, FlexSpace, Spacer } from 'layouts';
import { WithLabel } from 'compounds';
import { TextInput } from 'elements';
import { FormContext, FormActions } from 'modules/forms';

interface IFiltersProps extends IDefaultProps {
  /**
   * [required] Unique Key to identify filter data being tracked.
   *
   * As long as Filters component is mounted, they will instantiate &
   * maintain separate state as `activeKey` prop changes.  All stored
   * values will reset on page refresh or component unmount
   */
  activeKey: string;
}

export const Filters: FunctionComponent<IFiltersProps> = props => {
  const { state, dispatch } = useContext(FormContext);

  useEffect(() => {
    if (!state[props.activeKey]) {
      dispatch(FormActions.registerFormElement(props.activeKey));
    }
  }, [props.activeKey]);

  const updateFiltersState = (value: string) =>
    dispatch(
      FormActions.setFormElementValue(props.activeKey, {
        value,
        isValid: true,
      }),
    );

  const currentValue = !!state[props.activeKey] ? state[props.activeKey].value : '';
  return (
    <Column padding={FlexSpace.HAMBURGER}>
      <WithLabel label="By Name">
        <Spacer width={`${FlexSpace.MEDIUM}`} />
        <TextInput onChange={updateFiltersState} value={currentValue} />
      </WithLabel>
    </Column>
  );
};

import React, { FunctionComponent } from 'react';
import { SubsectionTitle } from 'elements';
import { Row, Border, FlexSpace } from 'layouts';
import { isString } from 'utils';
import { Toggle } from 'modules/toggles';
import { IToggleableComponentProps } from '../toggle';

interface ITabComponentProps extends IToggleableComponentProps {
  /**
   * [required] Name associated with tab
   */
  tabName: string;
}

const Label: FunctionComponent<ITabComponentProps> = props => (
  <Toggle.Select toggleName={props.tabName}>
    {({ isActive, setActive }) => (
      <Row
        border={isActive && Border.PRIMARY_LEFT}
        borderOnHover={Border.SECONDARY_LEFT}
        padding={FlexSpace.MEDIUM}
        onClick={setActive}
        enableHoverEffects
        data-testid={`${props.tabName}-tab-label`}
      >
        {isString(props.children) ? (
          <SubsectionTitle>{props.children}</SubsectionTitle>
        ) : (
          props.children
        )}
      </Row>
    )}
  </Toggle.Select>
);

const Content: FunctionComponent<ITabComponentProps> = props => (
  <Toggle.Content toggleName={props.tabName}>{props.children}</Toggle.Content>
);

export const Tab = {
  Label,
  Content,
};

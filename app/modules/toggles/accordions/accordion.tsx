import React, { FunctionComponent } from 'react';
import { SubsectionTitle } from 'elements';
import { Row, Border, FlexSpace } from 'layouts';
import { isString } from 'utils';
import { Toggle } from 'modules/toggles';
import { IToggleableComponentProps } from '../toggle';

interface IAccordionComponentProps extends IToggleableComponentProps {
  /**
   * [required] Name associated with accordion
   */
  accordionName: string;
}

const TitleBar: FunctionComponent<IAccordionComponentProps> = props => (
  <Toggle.Select toggleName={props.accordionName}>
    {({ isActive, setActive }) => (
      <Row
        border={isActive && Border.BOTTOM}
        padding={FlexSpace.HAMBURGER}
        onClick={setActive}
        flex="1 1 auto"
        enableHoverEffects
        data-testid={`${props.accordionName}-accordion-titleBar`}
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

const Content: FunctionComponent<IAccordionComponentProps> = props => (
  <Toggle.Content toggleName={props.accordionName}>{props.children}</Toggle.Content>
);

export const Accordion = {
  TitleBar,
  Content,
};
